import cls from './Hero.module.css'
import HeroImg from '../../../assets/container-fluid (1).svg'
import {Link} from "react-router-dom";
function Hero() {
    return (
        <section className={cls.hero}>
            <div className={cls.wrapper}>
                <div className={cls.image} >
                     <HeroImg />
                </div>
                <Link to={'/products'} className={cls.btn}>
                    Shop now
                </Link>
            </div>
        </section>
    );
}

export default Hero;