import Hero from "../../molecules/Hero/Hero.tsx";
import {useEffect, useState} from "react";
import Products from "../../molecules/Products/Products.tsx";
import axios from "axios";
import {ProductProps} from "../../../utils/consts.ts";



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
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-1 uppercase">Product</h2>
                <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 uppercase">Most Popular Products</h1>
            </div>
            {products.length > 0 && (
                    <Products products={products}/>
            )}
        </div>
    );
}

export default Home;