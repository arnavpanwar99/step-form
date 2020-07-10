import React from 'react';
import { useHistory } from 'react-router-dom';

import s from './Payment.module.scss';
import Prototype from '../Prototype/Prototype';
import Input from '../Input/Input';

const Payment = () => {
    const history = useHistory();

    const navigatePrevious = () => history.push('/address');

    return(
        <Prototype showPrevious currentPosition={3} onPrevious={navigatePrevious} buttonText='Done' heading='Payment Details'>
            <div className={s.main}>
                <Input placeholder="Card Holder's Name" required />
                <Input placeholder="Card Numer" required />
                <Input placeholder="CVV" type='password' maxLength={3} required maxWidth={50} />
            </div>
        </Prototype>
    )
};

export default Payment;