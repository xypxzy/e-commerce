import {DrawerProps} from "../../utils/consts.ts";
import {Link} from "react-router-dom";
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io";
import {useContext} from "react";
import {DrawerContext} from "../../contexts/DrawerContext/DrawerContext.ts";

interface CardItemProps {
    cart: DrawerProps
}

function CartItem({cart}: CardItemProps) {
    const {id, amount, price, title, image} = cart;

    const {removeFromDrawer, increaseAmount, decreaseAmount} = useContext(DrawerContext)

    return (
        <div className={"flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 "}>
            <div className={"w-full min-h-[150px] flex items-center gap-x-4"}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt="product-image" className={"max-w-[80px]"}/>
                </Link>
                <div className={"w-full flex flex-col"}>
                    <div className={"flex justify-between mb-4"}>
                        <Link to={`/product/${id}`}
                              className={"text-sm uppercase font-medium max-w-[240px] hover:underline"}>
                            {title}
                        </Link>
                        <div onClick={() => removeFromDrawer(id)}
                            className={"text-xl cursor-pointer"}>
                            <IoMdClose className={"text-gray-500 hover:text-red-800 transition"}/>
                        </div>
                    </div>
                    <div className={"flex gap-x-2 h-[32px] text-sm"}>
                        <div className={"flex flex-1 max-w-[90px]  items-center h-full border font-medium" }>
                            <div
                                onClick={() => decreaseAmount(id)}
                                className={"flex-1 h-full flex justify-center items-center cursor-pointer"}>
                                <IoMdRemove/>
                            </div>
                            <div className={"h-full flex justify-center items-center px-2"}>{amount}</div>
                            <div
                                onClick={() => increaseAmount(id)}
                                className={"flex-1  h-full flex justify-center items-center cursor-pointer"}>
                                <IoMdAdd/>
                            </div>
                        </div>
                        <div className={"flex-1 flex justify-around items-center"}>$ {price}</div>
                        <div className={"flex-1 flex justify-end items-center font-medium"}>{`$ ${(amount * price).toFixed(2)}`}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CartItem;