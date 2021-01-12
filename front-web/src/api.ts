import axios from "axios";
import { OrderPayLoad } from "./Orders/types";

const API_URL = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

//Puxa os produtos do backend
export function fetchProducts() {
    return axios(`${API_URL}/products`);
}

//Puxa o mapa da lib LeafLet
export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

//Criando um novo pedido para o backend
export function saveOrder(payLoad: OrderPayLoad){
    return axios.post(`${API_URL}/orders`, payLoad)
}