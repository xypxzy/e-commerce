import {createContext} from 'react'
import {ProductProps} from "../../utils/consts.ts";

export const ProductContext = createContext<ProductProps[]>([]);


