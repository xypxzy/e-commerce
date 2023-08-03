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
                    <button className={cls.addBtn}>
                        <BsPlus />
                    </button>
                    <Link to={`/product/${id}`}
                          className={cls.cardBtn}>
                        <BsEyeFill/>
                    </Link>
                </div>
                <div className={cls.description}>
                    <h3 className={cls.description__category}>{category}</h3>
                    <Link to={`/product/${id}`} className={cls.description__title}>
                        {title}
                    </Link>
                    <p className={cls.price}>${price}</p>
                </div>
        </div>
    );
}

export default ProductItem;