import {Link} from "react-router-dom";
import cls from './Header.module.css'
import {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import {BsBag} from "react-icons/bs";
import {DrawerContext} from "../../../contexts/DrawerContext/DrawerContext.ts";

const navigations = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const {setIsOpen, isOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(DrawerContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    return (
        <header className={`${cls.header} ${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"}`}>
            <div className={cls.wrapper}>
                <Link to={'/'} className={cls.logo}>
                    E-commerce
                </Link>
                <nav className={cls.nav}>
                    {navigations.map(nav => (
                        <Link key={nav.path} to={nav.path} className={cls.nav_link}>{nav.name}</Link>
                    ))}
                </nav>
                <button className={cls.btn}>                {/*IF NOT TO LOGIN*/}
                    Login / Register
                </button>
                <button onClick={() => setIsOpen(!isOpen)}
                        className={"cursor-pointer flex relative"}
                >
                    <BsBag className={"text-xl"}/>
                    <div className={"bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"}>
                        {itemAmount}
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header;