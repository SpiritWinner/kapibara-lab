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
        <section className='Galerea' id='gallery'>
            <h2 className='Galerea-title'>Галерея</h2>
            <div className={cn()}>
                <div className={cn('img1', 'image-wrapper')}>
                    <img src={img1} alt="Image 1" />
                </div>
                <div className={cn('img2', 'image-wrapper')}>
                    <img src={img2} alt="Image 2" />
                </div>
                <div className={cn('img3', 'image-wrapper')}>
                    <img src={img3} alt="Image 3" />
                </div>
                <div className={cn('img4', 'image-wrapper')}>
                    <img src={img4} alt="Image 4" />
                </div>
                <div className={cn('img5', 'image-wrapper')}>
                    <img src={img5} alt="Image 5" />
                </div>
                <div className={cn('img6', 'image-wrapper')}>
                    <img src={img6} alt="Image 6" />
                </div>
                <div className={cn('img7', 'image-wrapper')}>
                    <img src={img7} alt="Image 7" />
                </div>
            </div> 
        </section>
    );
}

export default Galerea;