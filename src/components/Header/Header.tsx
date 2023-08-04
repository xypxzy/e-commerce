import {Link} from "react-router-dom";
import cls from './Header.module.css'
import {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../../contexts/SidebarContext/SidebarContext.ts";
import {BsBag} from "react-icons/bs";
import {DrawerContext} from "../../contexts/DrawerContext/DrawerContext.ts";
import {LoginContext} from "../../contexts/LoginContext/LoginContext.ts";
import {FiLogIn, FiLogOut} from "react-icons/fi";

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const {setIsOpen, isOpen} = useContext(SidebarContext)
    const {itemAmount} = useContext(DrawerContext);
    const {token, setToken} = useContext(LoginContext)


    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`;


    return (
        <header className={`${cls.header} ${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"}`}>
            <div className={cls.wrapper}>
                <Link to={'/'} className={cls.logo}>
                    E-commerce
                </Link>
                <nav className={`${cls.nav} ${isMobileMenuOpen ? cls.mobileNav : ""}`}>
                    {navigations.map(nav => (
                        <Link onClick={() => setIsMobileMenuOpen(false)} key={nav.path} to={nav.path} className={cls.nav_link}>{nav.name}</Link>
                    ))}
                </nav>
                <button
                    className="md:hidden flex flex-col right-0 absolute h-8 w-12 rounded opacity-100 justify-center items-center group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                </button>
                {!token ? (
                    <Link
                        to={'/login'}
                        className={cls.btn}>
                        <div className={"md:block hidden"}>Login / Register</div>
                        <div className={"md:hidden block m-0 text-xl"}><FiLogIn /></div>
                    </Link>
                ) : (
                    <>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={"cursor-pointer flex md:relative absolute right-12"}
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