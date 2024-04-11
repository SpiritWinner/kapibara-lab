import logo from '../../assets/icon/Vector.svg';
import phone from '../../assets/icon/Path.svg';
import './style.scss';

function Header () {
    return (
        <header className="Header">
            <div className='Header-log'>
                <img src={logo} className="App-logo" alt="logo" />
                <span>
                <p className='App-text'>Современные методики</p>
                <span className='App-text'>диагностики</span>
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
                <p className='Header-text--bold'>+7 123 456 7890</p>
                <span className='Header-text'>Звонок бесплатный</span>  
                </span>
            </div>
        </header>
    );
}

export default Header;