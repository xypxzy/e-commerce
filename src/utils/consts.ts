export interface ProductProps {
    id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    description: string,
}

export interface DrawerProps extends ProductProps {
    amount: number
}