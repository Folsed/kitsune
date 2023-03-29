import React from 'react'
import './news.style.css'


import promo from './../../../../img/promo.png'
import new1 from './../../../../img/news1.jpg'
import new2 from './../../../../img/news2.jpg'
import new3 from './../../../../img/news3.jpg'
import play from './../../../../img/icons/play-icon.png'
import girl from './../../../../img/girl.png'
import cat from './../../../../img/cat.png'
import { NewsBackgroung } from '../banner-bgs/NewsBackgroung'


const NewsBanner = () => {
    return (
        <div>
            <div className="banner-news__wrapper">
                <div className="banner-news__bg-wrapper">
                    <div className="banner-news__main-bg">
                        <NewsBackgroung />
                    </div>
                    <div className="banner-news__inner-bg">
                        <img src={girl} alt="" className="banner-news__promo-girl" />
                        <img src={cat} alt="" className="banner-news__promo-cat" />
                    </div>
                </div>

                <div className="banner-news__content-wrapper">
                    <div className="banner-news__block-title">
                        <h2 className='banner-news__heading'>Наші Новини</h2>
                        <div className="banner-news__shalf"></div>
                    </div>
                    <div className="banner-news__left-info">
                        <h3>Актуальні</h3>
                        <div className="banner-news__left-news">
                            <div className="banner-news__left-new-wrapper banner-news__shadow">
                                <a className='banner-news__left-info__new-link-wrapper' href="">
                                    <div className="banner-news__left-info__new-preview">
                                        <img src={new1} alt="" />
                                    </div>
                                    <div className="banner-news__left-info__new-description">
                                        <h3>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</h3>
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </a>
                            </div>
                            <div className="banner-news__left-new-wrapper banner-news__shadow">
                                <a className='banner-news__left-info__new-link-wrapper' href="">
                                    <div className="banner-news__left-info__new-preview">
                                        <img src={new2} alt="" />
                                    </div>
                                    <div className="banner-news__left-info__new-description">
                                        <h3>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</h3>
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="banner-news__right-info-wrapper">
                        <h3>Останні</h3>
                        <div className="banner-news__right-info">
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-news__right-info__latest-new__wrapper banner-news__shadow">
                                <a tabIndex={0} href="#" className="banner-news__right-info__latest-new__link" />
                                <div className="banner-news__right-info__latest-new__preview">
                                    <picture>
                                        <img src={new3} alt="" className="banner-news__right-info__latest-new__preview-img" />
                                    </picture>
                                </div>
                                <div className="banner-news__right-info__latest-new__description">
                                    <div className="banner-news__right-info__latest-new__description-title">
                                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam iure, voluptates consequatur numquam dolor libero similique, cumque consequuntur repudiandae facilis quaerat. In necessitatibus natus atque maiores animi reiciendis sed?</h3>
                                    </div>
                                    <div className="banner-news__right-info__latest-new__description-subtitle">
                                        <span>Date: 11/11/1111</span>
                                        <p>Anything</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBanner