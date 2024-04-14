import {memo} from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.scss';

function Button ({btnName, lincIcon, href}) {
    const cn = bem('Button');

    return (
        <button className={cn()} src={href} type="submit">
            {btnName}  
            <img src={lincIcon} />
        </button>
    );
}

export default memo(Button);