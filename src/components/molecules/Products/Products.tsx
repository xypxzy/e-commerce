import cls from './Products.module.css';
import {ProductProps} from "../../organism/Home/Home.tsx";
import ProductItem from "../ProductItem/ProductItem.tsx";

interface Props {
    products: ProductProps[]
}
function Products({products}: Props) {

    return (
        <section className={cls.products}>
            <div className={cls.wrapper}>
                <div className={cls.productList}>
                    {
                        products.map((item) => (
                            <ProductItem
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Products;