import cls from "./ProductItem.module.css";
import {ProductProps} from "../../../utils/consts.ts";
import {Link} from "react-router-dom";


function ProductItem(props: ProductProps) {
    const { category, image, price, title, id} = props;

    return (
        <Link to={`/product/${id}`} className={cls.product}>
            <a className={cls.link}>
                <img alt={title} className={cls.img}
                     src={image}/>
            </a>
            <div className={cls.description}>
                <h3 className={cls.description__category}>{category}</h3>
                <h2 className={cls.description__title}>{title}</h2>
                <p className={cls.price}>${price}</p>
            </div>
        </Link>
    );
}

export default ProductItem;