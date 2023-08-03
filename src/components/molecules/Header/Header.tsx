import {Link} from "react-router-dom";
import cls from './Header.module.css'
import {useContext} from "react";
import {SidebarContext} from "../../../contexts/SidebarContext/SidebarContext.ts";
import {BsBag} from "react-icons/bs";

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
    const {setIsOpen, isOpen} = useContext(SidebarContext)

    return (
        <header className={cls.header}>
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
                    <BsBag />
                </button>
            </div>
        </header>
    )
}

export default Header;