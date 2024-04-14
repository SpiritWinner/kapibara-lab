import {cn as bem} from '@bem-react/classname';
import DoneIcon from '../../assets/icon/Group.svg'
import './style.scss';

function Modal ({ isVisible = false, onClose}) {
    const cn = bem('Modal');

    return !isVisible ? null : (
        <div className={cn()} onClick={onClose}>
            <div className={cn('dialog')} onClick={e => e.stopPropagation()}>
                <img src={DoneIcon} className={cn('icon')} alt="icon" />
                <p className={cn('text')}>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</p>
            </div>
        </div> 
    );
}

export default Modal;