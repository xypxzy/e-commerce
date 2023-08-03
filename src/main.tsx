import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import ProductProvider from "./contexts/ProductContext/ProductProvider.tsx";
import App from './App.tsx'
import './index.css'
import SidebarProvider from "./contexts/SidebarContext/SidebarProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SidebarProvider>
            <ProductProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ProductProvider>
        </SidebarProvider>
    </React.StrictMode>,
)
