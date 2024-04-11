import {cn as bem} from '@bem-react/classname';
import './style.scss';

import img1 from '../../assets/image/galerea/img1.png';
import img2 from '../../assets/image/galerea/img2.png';
import img3 from '../../assets/image/galerea/img3.png';
import img4 from '../../assets/image/galerea/img4.png';
import img5 from '../../assets/image/galerea/img5.png';
import img6 from '../../assets/image/galerea/img6.png';
import img7 from '../../assets/image/galerea/img7.png';

function Galerea () {
    const cn = bem('grid');

    return (
        <div className='Galerea'>
            <h2 className='Galerea-title'>Галерея</h2>
            <section className={cn()}>
                <img className={cn('img1')} src={img1} />
                <img className={cn('img2')} src={img2} />
                <img className={cn('img3')} src={img3} />
                <img className={cn('img4')} src={img4} />
                <img className={cn('img5')} src={img5} />
                <img className={cn('img6')} src={img6} />
                <img className={cn('img7')} src={img7} />
            </section> 
        </div>
    );
}

export default Galerea;