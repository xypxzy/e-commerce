import {FC, ReactNode, useEffect, useState} from 'react';
import {ProductContext} from './ProductContext.ts';
import {ProductProps} from "../../utils/consts.ts";
import axios from "axios";

interface ProductProviderProps {
    children: ReactNode;
}

const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductProps[]>([])
    const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        const fetchProducts = () => {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    setProducts(response.data)
                    setFilteredProducts(products);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        }
        fetchProducts();
    }, [products])

    type sortType = 'desc' | 'asc';
    const sortCategory = (type: sortType) => {
        axios.get(`https://fakestoreapi.com/products?sort=${type}`)
            .then(response=> {
                setProducts(response.data)
                setFilteredProducts(products)
            })
            .catch(error=>console.log('Error', error))
    }

    const findProducts = (query: string) => {
        const filteredProducts = products.filter((product) => {
            const title = product.title.toLowerCase();
            return title.includes(query.toLowerCase());
        });

        setFilteredProducts(filteredProducts);
    }

    return (
        <ProductContext.Provider value={{products: filteredProducts, sortCategory, findProducts}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
