import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';
import { OrderLocationData } from './types';

//Posição inicial no mapa
const initialPosition = {
    lat: -2.5369191,
    lng: -44.2605489
};

//O "?" significa que é opcional atribuir um valor a um atributo
type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

const OrderLocation = ({onChangeLocation}: Props) => {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        //Puxa do mapa leaflet o resultado da pesquisa feita pelo inputValue
        const response = await fetchLocalMapBox(inputValue);
      
        const places = response.data.features.map((item: any) => {
          return ({
            label: item.place_name,
            value: item.place_name,
            position: {
              lat: item.center[1],
              lng: item.center[0]
            }
          });
        });
      
        callback(places);
      };
      
      const handleChangeSelect = (place: Place) => {
          //Configura uma nova posição para o mapa
        setAddress(place);
        onChangeLocation({
          latitude: place.position.lat,
          longitude: place.position.lng,
          address: place.label!
        });
      };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter-container">
                    {/*Biblioteca React Select para carregar opções conforme o usuário digita*/}
                    <AsyncSelect
                        placeholder="Digite um endereço para entregar o pedido"
                        className="filter"
                        {/*Carrega as opções puxadas na biblioteca do LeafLet */}
                        loadOptions={loadOptions}
                        onChange={value => handleChangeSelect(value as Place)}
                    />
                </div>
                {/*Renderiza o mapa de acordo com o "address" fornecido ou, inicialmente, pelo "initialPosition" */}
                <MapContainer center={address.position} zoom={13} scrollWheelZoom key={address.position.lat}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                    <Popup>
                        {address.label}
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};


export default OrderLocation;
