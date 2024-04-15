import logoIcon from '../../assets/icon/Logo.svg';
import phoneIcon from '../../assets/icon/Phone.svg';
import {cn as bem} from '@bem-react/classname';
import './style.scss';

function Header () {
    const head = bem('Header');

    return (
        <header className={head()}>
            
            <div className={head('logo', 'fl')}>
                <img src={logoIcon} className={head('icon')} alt="logo" />
                <span className={head('text')}>
                    <span className={head('title')}>Современные методики</span>
                    <span className={head('subtitle')}>диагностики</span>
                </span>
            </div>
            
            <nav className={head('navigation')}>
                <a className={head('link')} href="#laboratory">
                    Лаборатория
                </a>
                <a className={head('link')} href="#gallery">
                    Галерея
                </a>
                <a className={head('link')} href="#request">
                    Оставить заявку
                </a>
            </nav>

            <div className={head('logo')}>
                <img src={phoneIcon} className={head('icon')} alt="phone icon" />
                <span className={head('text', 'phone')}>
                    <p className={head('title', 'bold')}>+7 123 456 7890</p>
                    <span className={head('subtitle')}>Звонок бесплатный</span>  
                </span>
            </div>

        </header>
    );
}

export default Header;