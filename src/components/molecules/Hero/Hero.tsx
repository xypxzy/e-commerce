import cls from './Hero.module.css'
import Button from "../../atoms/Button/Button.tsx";
function Hero() {
    return (
        <section className={cls.hero}>
            <div className={cls.wrapper}>
                <img className={cls.image} alt="hero" src="https://dummyimage.com/720x600"/>
                <div className={cls.description}>
                    <h1 className={cls.description__title}>Microdosing synth
                        tattooed vexillologist</h1>
                    <p className={cls.description__text}>Meggings kinfolk echo park stumptown DIY, kale chips beard
                        jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon
                        mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
                        mlkshk freegan photo booth af fingerstache pitchfork.</p>
                    <div className={cls.btn}>
                        <Button color={"primary"} size={'m'}>Clcik</Button>
                        <Button color={"secondary"} size={'m'}>DOnt click</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;