import React from 'react';
import { checkSelected } from './helpers';
import ProductCards from './ProductCards';
import { Product } from './types';

type Props = {
    product: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;    
}

const ProductsList = ({ product, onSelectProduct, selectedProducts }: Props) => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {product.map(product => (
                    <ProductCards 
                        key={product.id} 
                        product={product} 
                        onSelectProduct={onSelectProduct}
                        isSelected={checkSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
