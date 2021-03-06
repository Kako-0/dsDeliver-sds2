import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationData, Product } from './types';


const Orders = () => {

    const [product, setProduct] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProduct(response.data))
            .catch(() =>{
                toast.warning('Erro ao listar produtos')
            });
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkSelected(selectedProducts, product)
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        //Armazena o Id de um produto e a localização de que pediu
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        //Envia o pedido para o backend
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
          //Zera os pedidos
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
        })
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader/>
                <ProductsList 
                    product={product}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
                <OrderSummary amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer/>
        </>
    );
};

export default Orders;
