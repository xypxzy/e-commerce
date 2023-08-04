import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Card from "./pages/Card/Card.tsx";
import Home from "./pages/Home/Home.tsx";
import Products from "./pages/Products/Products.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Login from "./pages/Login/Login.tsx";
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/product/:id'} element={<Card />} />
                <Route path={'/products'} element={<Products />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}

export default App
