import cls from "./ProductItem.module.css";
import {ProductProps} from "../../../utils/consts.ts";
import {Link} from "react-router-dom";
import {BsEyeFill, BsPlus} from "react-icons/bs";


function ProductItem(props: ProductProps) {
    const {category, image, price, title, id} = props;

    return (
        <div className={cls.product}>
                <div className={cls.imageBlock}>
                    <img alt={title} className={cls.img}
                         src={image}/>
                </div>
                <div className={cls.buttons}>
                    <button className="flex rounded-xl justify-center items-center text-white w-8 h-8 bg-red-500">
                        <BsPlus className="text-xl"/>
                    </button>
                    <Link to={`/product/${id}`}
                          className={"w-8 h-8 rounded-xl bg-white flex justify-center items-center drop-shadow-xl"}>
                        <BsEyeFill/>
                    </Link>
                </div>
                <div className={cls.description}>
                    <h3 className={cls.description__category}>{category}</h3>
                    <Link to={`/product/${id}`} className={cls.description__title}>{title}</Link>
                    <p className={cls.price}>${price}</p>
                </div>
        </div>
    );
}

export default ProductItem;