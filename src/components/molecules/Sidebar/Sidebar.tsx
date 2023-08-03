import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import {IoMdArrowForward} from "react-icons/io";
import cls from './Sidebar.module.css'
function Sidebar() {
    const {isOpen, handleClose} = useContext(SidebarContext);
    return (
        <div className={`${cls.sidebar} ${isOpen ? 'right-0' : '-right-full'}`}>
            <div className={cls.wrapper}>
                <div className={cls.header}>Shopify Bag (0)</div>
                <div
                    onClick={handleClose}
                    className={cls.backBtn}>
                    <IoMdArrowForward className={"text-xl"}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;