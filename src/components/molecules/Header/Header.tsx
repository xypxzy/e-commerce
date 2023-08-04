import {Link} from "react-router-dom";
import cls from './Header.module.css'
import {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import {BsBag} from "react-icons/bs";
import {DrawerContext} from "../../../contexts/DrawerContext/DrawerContext.ts";
import {LoginContext} from "../../../contexts/LoginContext/LoginContext.ts";
import {FiLogOut} from "react-icons/fi";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // Step 1

    const {setIsOpen, isOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(DrawerContext);
    const {token, setToken} = useContext(LoginContext)


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
                <button
                    className={cls.mobileMenuButton} // Step 2
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    Burger
                </button>
                {!token ? (
                    <Link
                        to={'/login'}
                        className={cls.btn}>
                        Login / Register
                    </Link>
                ) : (
                    <>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={"cursor-pointer flex relative"}
                        >
                            <BsBag className={"text-xl"}/>
                            <div className={cls.notices}>
                                {itemAmount}
                            </div>
                        </button>
                        <button
                            onClick={() => {
                                setToken('');
                                localStorage.clear()
                            }}
                            className={"py-2 rounded-xl"}
                        >
                            <FiLogOut className={"text-xl"}/>
                        </button>
                    </>
                )
                }
            </div>
        </header>
    )
}

export default Header;