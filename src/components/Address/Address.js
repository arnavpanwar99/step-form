import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './Address.module.scss';
import Prototype from '../Prototype/Prototype';
import Input from '../Input/Input';

const Address = () => {
    const history = useHistory();

    const navigateNext = () => history.push('/payment');
    const navigatePrevious = () => history.push('/');

    return(
        <Prototype showPrevious onPrevious={navigatePrevious} currentPosition={2} buttonText='Next' onSubmit={navigateNext} heading='Address'>
            <div className={s.main}>
                <Input placeholder='Address Line 1' />
                <Input placeholder='Address Line 2' />
                <Input placeholder='Address Line 3' />
                <Input placeholder='State' />
            </div>
        </Prototype>
    )
}

export default Address;