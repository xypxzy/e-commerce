import cls from './ProductsList.module.css';
import ProductItem from "../ProductItem/ProductItem.tsx";
import {ProductProps} from "../../../utils/consts.ts";

interface Props {
    products: ProductProps[]
}
function ProductsList({products}: Props) {

    return (
        <section className={cls.products}>
            <div className={cls.wrapper}>
                <div className={cls.productList}>
                    {
                        products.map((item) => (
                            <ProductItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.image}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ProductsList;