import React from 'react';

import bem from "easy-bem";

import './style.scss'

const Video = () => {

    const cn = bem('video')

    return (
        <div className={cn()}>
            <h2 className={cn('title')}>
                Специально для Вас видео наших кухонь
            </h2>
            <div className={cn('boxes')}>

                <div className={cn('box')}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TWAgV_JfN0I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className={cn('box')}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TWAgV_JfN0I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className={cn('box')}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/TWAgV_JfN0I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>

            </div>

            <button className={cn('button')}>
                Смотреть больше видео
            </button>

        </div>
    );
};

export default Video;