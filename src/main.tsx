import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import ProductProvider from "./contexts/ProductContext/ProductProvider.tsx";
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProductProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ProductProvider>
    </React.StrictMode>,
)
