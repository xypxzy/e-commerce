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
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-1 uppercase">Product</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 uppercase">Most Popular Products</h1>
                </div>
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