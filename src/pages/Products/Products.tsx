import ProductsList from "../../components/molecules/ProductsList/ProductsList.tsx";
import {useContext} from "react";
import {ProductContext} from "../../contexts/ProductContext/ProductContext.ts";

function Products() {
    const products = useContext(ProductContext)

    return (
        <div>
            {products.length > 0 && (
                <ProductsList products={products}/>
            )}
        </div>
    );
}

export default Products;