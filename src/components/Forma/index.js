import React from 'react';
import {cn as bem} from '@bem-react/classname';
import marker from '../../assets/icon/checkmark.svg';
import './style.scss';
import Button from '../Button';
import Modal from '../Modal';

function Forma () {
    const cn = bem('Forma');

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
    };
      

    return (
        <section className={cn()} id='request'>
            <h2 className={cn('title')}>Заявка на диагностику</h2>
            <p className={cn('info')}>
                Доверьте свои медицинские исследования надежным капибарам-лаборантам и
                получите качественные результаты в кратчайшие сроки!
            </p>
            <form className={cn('form')} onSubmit={handleSubmit}>
            <div className={cn('form-inputs')}>
                <input type="text" name="name" placeholder='Фамилия' required/>
                <input type="text" name="name" placeholder='Имя' required/>
                <input type="text" name="name" placeholder='Отчество' required/>
            </div>

            <Button 
              btnName={"Отправить"}
              lincIcon={marker}
            />
            </form>
            <Modal 
                isVisible={modalIsOpen} 
                onClose={() => setModalIsOpen(false)}
            />
        </section> 
    );
}

export default Forma;