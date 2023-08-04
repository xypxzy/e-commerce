import {createContext} from 'react'
import {ProductProps} from "../../utils/consts.ts";
type sortType = 'desc' | 'asc'

interface ProductContextProps {
    products: ProductProps[],
    sortCategory: (type: sortType) => void
    findProducts: (query: string) => void
}

const initialValue = {
    products: [],
    sortCategory: (type: sortType) => {},
    findProducts: (query: string) => {}
}

export const ProductContext = createContext<ProductContextProps>(initialValue);


