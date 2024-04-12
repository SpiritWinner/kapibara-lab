import {cn as bem} from '@bem-react/classname';
import marker from '../../assets/icon/checkmark.svg';
import './style.scss';

function Forma () {
    const cn = bem('Forma');

    return (
        <section className={cn()}>
            <h2 className={cn('title')}>Заявка на диагностику</h2>
            <p className={cn('info')}>
                Доверьте свои медицинские исследования надежным капибарам-лаборантам и
                получите качественные результаты в кратчайшие сроки!
            </p>
            <form className={cn('form')}>
            <div>
                <input type="text" name="name" placeholder='Фамилия' required/>
                <input type="text" name="name" placeholder='Имя' required/>
                <input type="text" name="name" placeholder='Отчество' required/>
            </div>
            <a className={cn('button')}>
                Отправить  
                <img src={marker} />
            </a>
            </form>
        </section> 
    );
}

export default Forma;