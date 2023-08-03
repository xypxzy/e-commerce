import {DrawerContext} from "./DrawerContext.ts";
import {ReactNode, useEffect, useState} from "react";
import {DrawerProps, ProductProps} from "../../utils/consts.ts";


const DrawerProvider = ({children}: { children: ReactNode }) => {
    const [drawer, setDrawer] = useState<DrawerProps[]>([]);
    const [itemAmount, setItemAmount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if (drawer) {
            const amount = drawer.reduce((acc, item) => {
                return acc + item.amount;
            }, 0)
            setItemAmount(amount)
        }
    }, [drawer])

    useEffect(() => {
        if (drawer) {
            const sum = drawer.reduce((acc, item) => {
                return acc + (item.price * item.amount);
            },0)
            setTotal(sum)
        }
    }, [drawer])


    const addToDrawer = (product: ProductProps, id: number) => {
        const newItem = {
            ...product,
            amount: 1,
        }
        const cardItem = drawer.find(item => {
            return item.id === id
        })
        if (cardItem) {
            const newCard = [...drawer].map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: cardItem.amount + 1,
                    }
                } else {
                    return item;
                }
            })
            setDrawer(newCard)
        } else {
            setDrawer([...drawer, newItem])
        }
    }

    const removeFromDrawer = (id: number) => {
        const newCard = drawer.filter((item) => item.id !== id)
        setDrawer(newCard)
    }

    const clearDrawer = () => {
        setDrawer([]);
    }

    const increaseAmount = (id: number) => {
        const item = drawer.find((item) => item.id === id);
        if (item) {
            addToDrawer(item, id)
        }
    }

    const decreaseAmount = (id: number) => {
        const drawerItem = drawer.find((item) => item.id === id);

        if (drawerItem) {
            const newItem = drawer.map((item) => {
                if (item.id === id) {
                    return {...item, amount: drawerItem.amount - 1}
                } else {
                    return item
                }
            })
            setDrawer(newItem)
        }
        if (drawerItem && drawerItem.amount < 2) {
            removeFromDrawer(id)
        }
    }

    return <DrawerContext.Provider value={
        {
            drawer,
            removeFromDrawer,
            addToDrawer,
            clearDrawer,
            increaseAmount,
            decreaseAmount,
            itemAmount,
            total
        }
    }>
        {children}
    </DrawerContext.Provider>
}

export default DrawerProvider;