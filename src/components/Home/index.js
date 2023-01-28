import React from 'react';

import bem from "easy-bem";

import './style.scss'

const Home = () => {

    const cn = bem('home')

    return (
        <div className={cn()}>
            <div className={cn('box')}>
            <div className={cn('left-bg')}></div>
            <div className={cn('right-content')}>
                <p className={cn('title')}>
                    Кухни от производителя
                </p>
                <h2 className={cn('sale')}>-40%</h2>
                <p className={cn('subtitle')}>На коллекции кухонь</p>
                <button className={cn('button')}>Выбрать</button>
            </div>
            </div>
        </div>
    );
};

export default Home;