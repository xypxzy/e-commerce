import {Route, Routes} from "react-router-dom";
import Home from "./components/organism/Home/Home.tsx";
import Header from "./components/molecules/Header/Header.tsx";
import Footer from "./components/molecules/Footer/Footer.tsx";
import ProductDetails from "./components/organism/ProductDetails/ProductDetails.tsx";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/product/:id'} element={<ProductDetails />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
