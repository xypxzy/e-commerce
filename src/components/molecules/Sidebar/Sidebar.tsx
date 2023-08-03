import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import cls from './Sidebar.module.css'
import {IoMdArrowForward} from "react-icons/io";
function Sidebar() {
    const {isOpen, handleClose} = useContext(SidebarContext);
    return (
        <div className={`${cls.sidebar} ${isOpen ? 'right-0' : '-right-full'}`}>
            <div className={"flex justify-between items-center py-6 border-b"}>
                <div className={"uppercase font-semibold text-sm"}>Shopify Bag (0)</div>
                <div
                    onClick={handleClose}
                    className={"w-8 h-8 cursor-pointer flex justify-center items-center"}>
                    <IoMdArrowForward className={"text-xl"}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;