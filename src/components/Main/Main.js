import React from 'react';
import './Main.css'
import Offer from '../Offer/Offer';

function Main() {

    return (
        <main className='main'>
            <div className='redlight'></div>
            <div className='red-ball'></div>
            <div className='red-ball-small'></div>
            <div className='main-wrap'>
                <h1 className='main-title'>Зарабатывайте больше <span className='gradient-text main-text'>с WELBEX</span></h1>
                <p className='main-capture'>Развиваем и контролируем продажи за вас</p>
            </div>
            <Offer/>
        </main>
    )
}

export default Main;