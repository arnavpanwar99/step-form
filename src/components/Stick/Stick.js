import React, { useRef, useEffect } from 'react';

import s from './Stick.module.scss';

const Stick = ({currentPosition, maxSize}) => {

    const stickRef = useRef(null);

    useEffect(() => {
        stickRef.current.style.gridTemplateColumns = `repeat(${maxSize}, ${100/maxSize}%)`;
        for(let i = 1; i <= maxSize; i++){
            const element = document.createElement('div');
            element.innerText = i;
            if(i === currentPosition){
                element.style.color = '#fff';
                element.style.backgroundColor = '#6baf49';
                element.style.boxShadow = 'inset 0 0 10px #00000022'
            }else{
                element.style.border = 'solid .1rem #6baf49';
            }
            element.className = s.main_box_child;
            stickRef.current.appendChild(element);
        }
    }, [currentPosition, maxSize])

    return(
        <div className={s.main}>
            <section ref={stickRef} className={s.main_box}>
                <hr className={s.main_box_line} style={{width: `${100-(100/maxSize)}%`}} />
                <hr className={[s.main_box_line, s.special].join(" ")} style={{width: `${((currentPosition-1)*100)/(maxSize)}%`, left: `${100/(maxSize*2)}%`, transform: 'none'}} />
            </section>
        </div>
    )
}

export default Stick;