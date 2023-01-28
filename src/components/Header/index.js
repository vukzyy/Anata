import React from 'react';
import bem from "easy-bem";

import subtract from '../../assets/images/Header/Subtract.png'
import heart from '../../assets/images/Header/heart.png'
import telegram from '../../assets/images/Header/Group.png'
import cubes from '../../assets/images/Header/icon.png'
import ruler from '../../assets/images/Header/icon (1).png'

import './style.scss'

const Header = () => {

    const cn = bem('header')
    return (
        <header className={cn()}>
            <div className={cn('container')}>
                <h3 className={cn('title')}>
                    <img src={subtract} alt="" className={cn('title-icon')}/>
                    <span className={cn('title-span')}>Аната</span>
                    - Кухни
                </h3>
                <div className={cn('desBox')}>
                    <p className={cn('des')}>
                        Москва, <br/>
                        Дмитровское шоссе, д 62 стр 5</p>
                    <p className={cn('contact')}>
                        +7 499 321-20-63 <br/>
                        <span className={cn('contact-span')}>Заказать звонок</span>
                    </p>
                    <p className={cn('des')}>
                        9:00 - 20:00 <br/>
                        ежедневно
                    </p>
                    <p className={cn('favorite')}>
                        <img src={heart} alt="" className={cn('favorite-icon')}/> 3
                    </p>
                </div>
            </div>
            <div className={cn('menuContainer')}>
                <div className={cn('menuContainer-item')}>
                    <div className={cn('menuIcon')}>
                        <div className={cn('menuIcon-item')}/>
                        <div className={cn('menuIcon-item')}/>
                        <div className={cn('menuIcon-item')}/>
                    </div>
                    <p className={cn('menuContainer-des')}>Каталог</p>
                    <p className={cn('menuContainer-des')}>Наши работы</p>
                    <p className={cn('menuContainer-des')}>Отзывы</p>
                    <p className={cn('menuContainer-des')}>Видео</p>
                    <p className={cn('menuContainer-des')}>
                        <img src={telegram} alt="" className={cn('menuContainer-desIcon')}/>
                        Телеграм
                    </p>
                </div>
                <div className={cn('buttonBox')}>
                    <button className={cn('buttonBox-projectBtn')}>
                        <img src={cubes} alt=""/>
                        Проект + Расчет
                    </button>
                    <button className={cn('buttonBox-measureBtn')}>
                        <img src={ruler} alt=""/>
                        Вызвать замерщика с образцами
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;