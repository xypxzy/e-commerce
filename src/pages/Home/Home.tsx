import Hero from "../../components/Hero/Hero.tsx";
import ProductsList from "../../components/ProductsList/ProductsList.tsx";


function Home() {

    return (
        <div className={"py-20"}>
            <Hero/>
            <ProductsList />
        </div>
    );
}

export default Home;