import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import ProductProvider from "./contexts/ProductContext/ProductProvider.tsx";
import App from './App.tsx'
import './index.css'
import SidebarProvider from "./contexts/SidebarContext/SidebarProvider.tsx";
import CardProvider from "./contexts/DrawerContext/DrawerProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SidebarProvider>
            <CardProvider>
                <ProductProvider>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ProductProvider>
            </CardProvider>
        </SidebarProvider>
    </React.StrictMode>,
)
