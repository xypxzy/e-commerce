import cls from './ProductDetails.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {ProductProps} from "../../../utils/consts.ts";
import Button from "../../atoms/Button/Button.tsx";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState<ProductProps>()

    useEffect(() => {
        const fetchProducts = () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(response => {
                    setProduct(response.data)
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        }
        fetchProducts();
    }, [])

    if (!product) {
        return (
            <h1>Page Is Not Found</h1>
        );
    }

    return (
        <section className={cls.productDetails}>
            <div className={cls.wrapper}>
                <div className={cls.info}>
                    <img alt="ecommerce" className={cls.img} src={product.image}/>
                    <div className={cls.header}>
                        <h2 className={cls.brand}>{product.category}</h2>
                        <h1 className={cls.title}>{product.title}</h1>
                        <p className={cls.description}>
                            {product.description}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button
                                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button
                                    className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select
                                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span
                                        className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

              </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-20">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <div className="flex gap-2">
                                <Button color={"primary"} size={'m'}>Buy it now</Button>
                                <Button color={"secondary"} size={'m'}>Add to cart</Button>
                            </div>

                            <button
                                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;