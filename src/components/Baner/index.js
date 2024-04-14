import kapibara from '../../assets/image/kopibara.png';
import lab from '../../assets/image/lab.png';
import arrow from '../../assets/icon/Arrow.svg';
import {cn as bem} from '@bem-react/classname';
import './style.scss';

function Baner () {
    const cn = bem('Baner');

    return (
        <section>
            <section className={cn()}>
                <span className={cn('title')}>
                    <p className={cn('dark')}>точные результаты</p>
                    <p className={cn('light')}>точно в срок</p>
                </span> 
                <img className={cn('wrapper')} src={kapibara}/>
            </section>

            <section className='info'>
                <span>
                    Добро пожаловать в медицинскую лабораторию KapibaraLab, где работают исключительно капибары 
                    — ваш надежный партнер в обеспечении качественной и точной диагностики!
                </span>
            </section>
            
            <section  className='test'>
            <h2 className='inform-title'>Лаборатория</h2>
                <div className='About' id='laboratory'>
                    <div className='inform'>
                        <div className='inform-desc'>
                            <p className='inform-text'>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых опытными капибарами-лаборантами.
                                Мы специализируемся на анализе биоматериалов, микробиологических исследованиях, генетической диагностике и многом другом.
                            </p>
                            <p className='inform-text'>Мы используем современное оборудование и методики и гарантируем точность и надежность результатов.</p>
                        </div>

                        <a className={cn('btn')} href="#request">
                            Оставить заявку 
                            <img src={arrow} />
                        </a>
                    </div>
                    <img src={lab} className='inform-img'/>
                </div>
            </section>
        </section>
    );
}

export default Baner;