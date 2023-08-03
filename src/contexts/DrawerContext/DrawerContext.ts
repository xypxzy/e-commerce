import {createContext} from "react";
import {DrawerProps, ProductProps} from "../../utils/consts.ts";

interface DrawerContextProps {
    drawer: DrawerProps[],
    itemAmount: number,
    total: number,
    addToDrawer: (product: ProductProps, id: number) => void,
    removeFromDrawer: (id: number) => void,
    clearDrawer: () => void,
    increaseAmount: (id: number) => void,
    decreaseAmount: (id: number) => void,
}

const DrawerContextInitialValue: DrawerContextProps = {
    drawer: [],
    itemAmount: 0,
    total: 0,
    addToDrawer: (product: ProductProps, id: number) => {},
    removeFromDrawer: (id: number) => {},
    clearDrawer: () => {},
    increaseAmount: (id: number) => {},
    decreaseAmount: (id: number) => {}
}
export const DrawerContext = createContext<DrawerContextProps>(DrawerContextInitialValue);