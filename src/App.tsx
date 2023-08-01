import {useEffect} from "react";
import Home from "./components/organism/Home/Home.tsx";
import Header from "./components/molecules/Header/Header.tsx";
import Footer from "./components/molecules/Footer/Footer.tsx";

function App() {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App
