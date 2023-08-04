import cls from "./ProductItem.module.css";
import {ProductProps} from "../../../utils/consts.ts";
import {Link} from "react-router-dom";
import {BsEyeFill, BsPlus} from "react-icons/bs";
import {useContext} from "react";
import {DrawerContext} from "../../../contexts/DrawerContext/DrawerContext.ts";
import {LoginContext} from "../../../contexts/LoginContext/LoginContext.ts";

interface ProductItemProps {
    product: ProductProps;
}

function ProductItem({product}: ProductItemProps) {
    const {addToDrawer} = useContext(DrawerContext)
    const {token} = useContext(LoginContext)

    const {category, image, price, title, id} = product;

    return (
        <div className={cls.product}>
            <Link to={`/product/${id}`} className={cls.imageBlock}>
                <img alt={title} className={cls.img}
                     src={image}/>
            </Link>
            <div className={cls.buttons}>
                <button className={cls.addBtn}
                        onClick={() => (token && addToDrawer(product, id) )}>
                    {
                        !token ?
                        <Link to={'/login'}>
                            <BsPlus/>
                        </Link> :
                        <BsPlus/>
                    }
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