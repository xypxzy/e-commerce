import {Route, Routes} from "react-router-dom";
import Header from "./components/molecules/Header/Header.tsx";
import Footer from "./components/molecules/Footer/Footer.tsx";
import Sidebar from "./components/molecules/Sidebar/Sidebar.tsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";
import Home from "./pages/Home/Home.tsx";
import Products from "./pages/Products/Products.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/product/:id'} element={<ProductDetails />} />
                <Route path={'/products'} element={<Products />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}

export default App
