import GithubIcon from '../../assets/github.svg'
import InstagramIcon from '../../assets/instagram.svg'
import TwitterIcon from '../../assets/twitter.svg'
import LinkedinIcon from '../../assets/linkedin.svg'
import cls from './Footer.module.css'
function Footer() {
    return (
        <footer className={cls.footer}>
            <div className={cls.wrapper}>
                <a className={cls.logo}>
                    <span className="ml-3 text-xl">E-commerce</span>
                </a>
                <p className={cls.logo__title}>©
                    2023 E-commerce —
                    <a href="https://github.com/xypxzy" className="text-gray-600 ml-1" rel="noopener noreferrer"
                       target="_blank">@xypxzy</a>
                </p>
                <span className={cls.social_media}>
                    <a href="https://www.linkedin.com/in/dastan-chynybek-uulu-5a427527b/" className={cls.link}
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/xypxzy" className={cls.link}
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                        <GithubIcon />
                    </a>
                    <a href="#" className={cls.link}
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                        <TwitterIcon />
                    </a>
                    <a href="#" className={cls.link}
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                        <InstagramIcon />
                    </a>
                </span>

            </div>
        </footer>
    );
}

export default Footer;