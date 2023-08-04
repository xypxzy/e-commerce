import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import {IoMdArrowForward} from "react-icons/io";
import cls from './Sidebar.module.css'
import {DrawerContext} from "../../../contexts/DrawerContext/DrawerContext.ts";
import CartItem from "../CartItem/CartItem.tsx";
import {FiTrash} from "react-icons/fi";
import {Link} from "react-router-dom";

function Sidebar() {
    const {isOpen, handleClose} = useContext(SidebarContext);
    const {
        drawer,
        clearDrawer,
        itemAmount,
        total
    } = useContext(DrawerContext);

    return (
        <div className={`${cls.sidebar} ${isOpen ? 'md:right-0 right-10' : '-right-full'}`}>
            <div className={cls.header}>
                <div className={cls.title}>Shopify Bag ({itemAmount})</div>
                <div
                    onClick={handleClose}
                    className={cls.backBtn}>
                    <IoMdArrowForward className={"text-xl"}/>
                </div>
            </div>
            <div className={"flex flex-col gap-y-2 h-[580px] lg:h[640px] overflow-y-auto overflow-x-hidden border-b"}>
                {drawer.map(item => {
                    return (<CartItem key={item.id} cart={item}/>)
                })}
            </div>
            <div className={"flex w-full justify-between items-center mt-5"}>
                <div className={"uppercase font-semibold"}>
                    <span className={"mr-2"}>Total: </span> ${total.toFixed(2)}
                </div>
                <div onClick={clearDrawer}
                    className={"cursor-pointer rounded-xl py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"}>
                    <FiTrash />
                </div>
            </div>
            <div className={"flex flex-col mt-4"}>
                <Link to={'/'} className={"bg-gray-200 rounded-xl flex p-4 justify-center items-center w-full text-black font-medium"}>
                    View Cart
                </Link>
                <Link to={'/'} className={"bg-black rounded-xl flex p-4 justify-center items-center w-full text-white font-medium"}>
                    Checkout
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;