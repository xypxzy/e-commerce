import {FC, ReactNode, useEffect, useState} from 'react';
import {ProductContext} from './ProductContext.ts';
import {ProductProps} from "../../utils/consts.ts";
import axios from "axios";

interface ProductProviderProps {
    children: ReactNode;
}

const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        const fetchProducts = () => {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
        fetchProducts();
    }, [])

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
