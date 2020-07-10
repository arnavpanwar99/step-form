import React from 'react';

import s from './Input.module.scss';

const Input = ({placeholder, value, onChange, required=false, type='text', maxWidth=100, maxLength=30}) => {
    return(
        <div style={{maxWidth: `${maxWidth}%`}} className={s.main}>
            <label className={s.main_label} htmlFor='input' >{placeholder}</label>
            <input className={s.main_input} maxLength={maxLength} type={type} value={value} onChange={onChange} id='input' required={required} name='input' />
        </div>
    )
}

export default Input;