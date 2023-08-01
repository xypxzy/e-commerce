import cls from './Header.module.css'

function Header() {
    return (
        <header className={cls.header}>
            <div className={cls.wrapper}>
                <a className={cls.logo}>
                    E-commerce
                </a>
                <nav className={cls.nav}>
                    <a className={cls.nav_link}>Home</a>
                    <a className={cls.nav_link}>Products</a>
                    <a className={cls.nav_link}>About</a>
                    <a className={cls.nav_link}>Contact</a>
                </nav>
                <button className={cls.btn}>                {/*IF NOT TO LOGIN*/}
                    Login / Register
                </button>
            </div>
        </header>
    )
}

export default Header;