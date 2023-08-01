import cls from "./ProductItem.module.css";

export interface ProductItemProps {
    title: string,
    price: number,
    category: string,
    image: string
}

function ProductItem(props: ProductItemProps) {
    const { category, image, price, title} = props;

    return (
        <div className={cls.product}>
            <a className={cls.link}>
                <img alt={title} className={cls.img}
                     src={image}/>
            </a>
            <div className={cls.description}>
                <h3 className={cls.description__category}>{category}</h3>
                <h2 className={cls.description__title}>{title}</h2>
                <p className={cls.price}>${price}</p>
            </div>
        </div>
    );
}

export default ProductItem;