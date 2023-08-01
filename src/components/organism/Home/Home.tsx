import Hero from "../../molecules/Hero/Hero.tsx";
import {useEffect, useState} from "react";
import Products from "../../molecules/Products/Products.tsx";
import axios from "axios";
import cls from "../../molecules/Products/Products.module.css";

export interface ProductProps {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    description: string,
}

function Home() {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        const fetchProducts = () => {
            axios.get('https://fakestoreapi.com/products?limit=12')
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
        <div>
            <Hero/>
            {products.length > 0 && (
                <>
                    <h1 className={cls.title}>
                        All Products
                    </h1>
                    <Products products={products}/>
                </>
            )}
        </div>
    );
}

export default Home;