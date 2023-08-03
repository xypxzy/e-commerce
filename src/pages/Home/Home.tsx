import Hero from "../../components/molecules/Hero/Hero.tsx";
import ProductsList from "../../components/molecules/ProductsList/ProductsList.tsx";


function Home() {

    return (
        <div className={"py-20"}>
            <Hero/>
            <ProductsList />
        </div>
    );
}

export default Home;