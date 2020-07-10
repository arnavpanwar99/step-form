import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './Details.module.scss';
import Prototype from './../Prototype/Prototype';
import Input from '../Input/Input';

const Details = () => {
    const history = useHistory();

    const navigateNext = () => history.push('/address');

    return(
        <Prototype currentPosition={1} buttonText='Next' onSubmit={navigateNext} heading='Personal Details'>
            <div className={s.main}>
                <Input placeholder='First Name' required />
                <Input placeholder='Last Name' required />
                <Input placeholder='Email' type='email' required />
                <Input placeholder='Phone' type='tel' required maxLength={10} />
            </div>
        </Prototype>
    )
}

export default Details;