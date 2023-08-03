import Hero from "../../components/molecules/Hero/Hero.tsx";
import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext/ProductContext.ts";
import ProductsList from "../../components/molecules/ProductsList/ProductsList.tsx";


function Home() {
    const products = useContext(ProductContext)

    return (
        <div>
            <Hero/>
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-1 uppercase">Product</h2>
                <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 uppercase">Most Popular Products</h1>
            </div>
            {products.length > 0 && (
                    <ProductsList products={products}/>
            )}
        </div>
    );
}

export default Home;