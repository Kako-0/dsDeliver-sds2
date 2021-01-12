import { Product } from "./types";

//Retorna o produto dentro de uma lista de produtos
export const checkSelected = (selectedProducts: Product[], product: Product) =>{
    return selectedProducts.some(item => item.id === product.id);
}

//Formata o preço para o Real
export const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    return formatter.format(price);
}
