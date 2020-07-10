import React from 'react';

import s from './PrimaryButton.module.scss';

const PrimaryButton = ({text, onClick}) => {
    return(
        <div onClick={onClick} className={s.main}>
            {text}
        </div>
    )
};

export const SecondaryButton = ({text, onClick}) => {
    return(
        <div onClick={onClick} className={s.mainSecondary}>
            {text}
        </div>
    )
} 

export default PrimaryButton;