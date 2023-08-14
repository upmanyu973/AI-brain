'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./slider.css"


const Slider = () => {
    //     var myCarousel = document.querySelector('#carouselExampleCaptions')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    // //   interval: 2000,
    //   wrap: false
    // })
    return (
        <div class="container sliderContainer">
            <div class="row">
                {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/slider-image.png" class="d-block w-100" alt="slider-image" />
                            <div class="carousel-caption d-none d-md-block sliderContentContainer">
                                <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" class="d-block w-100" alt="slider-image" />
                            <div class="carousel-caption d-none d-md-block sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" class="d-block w-100" alt="slider-image" />
                            <div class="carousel-caption d-none d-md-block sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" class="d-block w-100" alt="slider-image" />
                            <div class="carousel-caption d-none d-md-block sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span> */}
                {/* <div class="ellipseContainer">
                        <img alt='slider-btn' src='/Ellipse 2.png' />
                        <img class="sliderBtn" alt='slider-left-btn' src="/slider-left-btn.png"/>
                        </div> */}
                {/* </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span> */}
                {/* <div class="ellipseContainer">
                        <img alt='slider-btn' src='/Ellipse 2.png' />
                        <img class="sliderBtn" alt='slider-right-btn' src="/slider-right-btn.png"/>
                        </div> */}
                {/* </button>
                </div> */}


                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                    {/* <!-- Indicators/dots --> */}
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

                    </div>

                    {/* <!-- The slideshow/carousel --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/slider-image.png" alt="Los Angeles" class="d-block w-100" />
                            <div class="carousel-caption sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" alt="Chicago" class="d-block w-100" />
                            <div class="carousel-caption sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" alt="New York" class="d-block w-100" />
                            <div class="carousel-caption sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/slider-image.png" alt="New York" class="d-block w-100" />
                            <div class="carousel-caption sliderContentContainer">
                            <p className='sliderContent'>Lauchpad For Products
                                <br/>
                                    Services That Have Something
                                    <br/>
                                    Unique and New</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Left and right controls/icons --> */}
                    <button class="carousel-control-prev" style={{opacity:"1"}} type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <div class="IconContainer">
                        <span class="carousel-control-prev-icon"></span>
                        </div>
                    </button>
                    <button class="carousel-control-next" style={{opacity:"1"}} type="button" data-bs-target="#demo" data-bs-slide="next">
                        <div class="IconContainer">
                        <span class="carousel-control-next-icon"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Slider