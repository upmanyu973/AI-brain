'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./slider.css"


const Slider = () => {
    return (
        <div class="container sliderContainer">
            <div class="row">
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

                    </div>
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