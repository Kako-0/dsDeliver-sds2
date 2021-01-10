import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationData, Product } from './types';


const Orders = () => {

    const [product, setProduct] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    useEffect(() => {
        fetchProducts()
            .then(response => setProduct(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList product={product}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    );
};

export default Orders;
