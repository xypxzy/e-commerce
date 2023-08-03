import cls from './ProductsList.module.css';
import ProductItem from "../ProductItem/ProductItem.tsx";
import {useContext} from "react";
import {ProductContext} from "../../../contexts/ProductContext/ProductContext.ts";

function ProductsList() {
    const products = useContext(ProductContext)

    return (
        <section className={cls.products}>
            <div className={cls.wrapper}>
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-1 uppercase">Product</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 uppercase">Most Popular Products</h1>
                </div>
                <div className={cls.productList}>
                    {
                        products.map((product) => (
                            <ProductItem key={product.title} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ProductsList;