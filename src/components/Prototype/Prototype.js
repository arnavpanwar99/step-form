import React from 'react';

import s from './Prototype.module.scss';
import Stick from './../Stick/Stick';
import PrimaryButton, { SecondaryButton } from '../PrimaryButton/PrimaryButton';

const Prototype = ({children, currentPosition, heading, buttonText, onSubmit, showPrevious=false, onPrevious}) => {
    return(
        <>
            <div className={s.heading}>
                <p className={s.heading_text}>{heading}</p>
            </div>
            <section className={s.main}>
                <div className={s.main_stickContainer}>
                    <Stick maxSize={3} currentPosition={currentPosition} />
                </div>
                <div className={s.main_contentContainer}>
                    {children}
                </div>
                <div className={s.main_buttonContainer}>
                    {showPrevious ? 
                    <SecondaryButton text='Previous' onClick={onPrevious} /> :
                    <div/>}
                    <PrimaryButton text={buttonText} onClick={onSubmit} />
                </div>
            </section>
        </>
    )
};

export default Prototype;