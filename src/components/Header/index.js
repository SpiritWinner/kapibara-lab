import logo from '../../assets/icon/Logo.svg';
import phone from '../../assets/icon/Phone.svg';
import {cn as bem} from '@bem-react/classname';
import './style.scss';

function Header () {
    const cn = bem('Header');

    return (
        <header className={cn()}>
            <div className={cn('log')}>
                <img src={logo} className={cn('logo')} alt="logo" />
                <span>
                <p className={cn('text')}>Современные методики</p>
                <span className={cn('text')}>диагностики</span>
                </span>
            </div>
            <nav>
                <a className="Header-link" >
                Лаборатория
                </a>
                <a className="Header-link" >
                Галерея
                </a>
                <a className="Header-link" >
                Оставить заявку
                </a>
            </nav>
            <div className='Header-number'>
                <img src={phone} className="Header-logo" alt="phone" />
                <span>
                <p className={cn('text', 'bold')}>+7 123 456 7890</p>
                <span className={cn('text')}>Звонок бесплатный</span>  
                </span>
            </div>
        </header>
    );
}

export default Header;