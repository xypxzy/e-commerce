import Hero from "../../components/molecules/Hero/Hero.tsx";
import ProductsList from "../../components/molecules/ProductsList/ProductsList.tsx";
import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext/ProductContext.ts";


function Home() {
    const products = useContext(ProductContext)

    return (
        <>
            <Hero/>
            {products.length > 0 && (
                <ProductsList products={products}/>
            )}
        </>
    );
}

export default Home;