import cls from './Card.module.css'
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext/ProductContext.ts";
import {DrawerContext} from "../../contexts/DrawerContext/DrawerContext.ts";
import {BiHeart} from "react-icons/bi";

function Card() {
    const {id} = useParams();
    const products = useContext(ProductContext)
    const {addToDrawer} = useContext(DrawerContext)

    if(!id) {
        return;
    }

    const product = products.find((item) => item.id === parseInt(id));

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
                        <div className="flex justify-between items-center mt-20">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            <div className="flex items-center  gap-2">
                                <button
                                    onClick={() => addToDrawer(product, parseInt(id))}
                                    className=" bg-black px-8 py-4 text-white hover:bg-gray-800">
                                    Add to cart
                                </button>
                                <button
                                    className="rounded-full w-12 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-black hover:text-red-800 hover:bg-gray-100 ml-4">
                                    <BiHeart className={""}/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;