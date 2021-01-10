import React from 'react';
import ProductCards from './ProductCards';
import { Product } from './types';

type Props = {
    product: Product[];
}

const ProductsList = ({ product }: Props) => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {product.map(product => (
                    <ProductCards key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
