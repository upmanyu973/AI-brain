'use client'
import React from 'react';
import styles from "./trending.css";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import { Fab } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const data = [
    {
        cover: "/newLaunch1.png",
        title: "",
    },
    {
        cover: "/newLaunch1.png",
        title: "",
    },
    {
        cover: "/newLaunch1.png",
        title: "",
    },
];
export const Card = React.memo(function (props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
        <div class="mySlider" >

            <div
                style={{
                    width: "100%",
                    height: 300,
                    userSelect: "none",
                }}
                className="my-slide-component"
            >
                <img
                    style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 0,
                    }}
                    draggable={false}
                    src={cover}
                />
            </div>
            <div style={{height:"450px"}}class="newLaunchDetailDiv trendingDetailDiv">
                <div class="newLunchiconsContainer">
                    <div class="newlaunchIconsLeft">
                        <div>
                            <img class="newLaunchIconsImg" alt="eye" src="/eye.png" /> <span class="spanIconRight">200</span>
                        </div>
                        <div>
                            <img class="newLaunchIconsImg" alt="comment" src="/comment.png" /> <span class="spanIconRight">200</span>
                        </div>
                        <div>
                            <img class="newLaunchIconsImg" alt="share" src="/share.png" /> <span class="spanIconRight">200</span>
                        </div>
                        <div>
                            <img class="newLaunchIconsImg" alt="like" src="/like.png" /> <span class="spanIconRight">200</span>
                        </div>
                    </div>
                    <div class="newlaunchIconsRight">
                        <div class="rightSideIconsDiv">
                            <img class="newLaunchIconsImg" alt="collection" src="/collection.png" />
                        </div>
                        <div class="rightSideIconsDiv">
                            <img class="newLaunchIconsImg" alt="charm_share" src="/charm_share.png" />
                        </div>
                    </div>
                </div>
                <p class="newLaunchDesc1">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and</p>
                <p class="newLaunchDesc2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not</p>
                <div class="d-flex justify-content-between">
                    <img class="Peopleimg" alt="people" src="/people.png" />
                    <button class="discoverBtn">Discover Now</button>
                </div>
            </div>
        </div>
    );
});
const Trending = () => {
    const ref = React.useRef();
    return (
        <div class="mt-5 container trendingContainer">
            <div class="row">
                <h3 class="d-flex justify-content-center p-2 mb-3 categoryHeading">Trending Now</h3>
            </div>
            {/* <div class="row newLaunchCategoryRow">
                {trending.map((item, index) => {
                    return (
                        <div class="col-4 mb-5" key={item?.id}>
                            <div className='cardConatiner'>
                                <div class="newLaunchImgCont">
                                    <img class="newLaunchImg" alt="newLaunch" src={item?.path} />
                                </div>
                                <div class="newLaunchDetailDiv">
                                    <div class="newLunchiconsContainer">
                                        <div class="newlaunchIconsLeft">
                                            <div>
                                                <img class="newLaunchIconsImg" alt="eye" src="/eye.png" /> <span class="spanIconRight">200</span>
                                            </div>
                                            <div>
                                                <img class="newLaunchIconsImg" alt="comment" src="/comment.png" /> <span class="spanIconRight">200</span>
                                            </div>
                                            <div>
                                                <img class="newLaunchIconsImg" alt="share" src="/share.png" /> <span class="spanIconRight">200</span>
                                            </div>
                                            <div>
                                                <img class="newLaunchIconsImg" alt="like" src="/like.png" /> <span class="spanIconRight">200</span>
                                            </div>
                                        </div>
                                        <div class="newlaunchIconsRight">
                                            <div class="rightSideIconsDiv">
                                                <img class="newLaunchIconsImg" alt="collection" src="/collection.png" />
                                            </div>
                                            <div class="rightSideIconsDiv">
                                                <img class="newLaunchIconsImg" alt="charm_share" src="/charm_share.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="newLaunchDesc1">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and</p>
                                    <p class="newLaunchDesc2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not</p>
                                    <div class="d-flex justify-content-between">
                                        <img class="Peopleimg" alt="people" src="/people.png" />
                                        <button class="discoverBtn">Discover Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button class="moreBtn">More</button>
            </div> */}
            <div style={{ width: "100%", position: "relative" }}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 3;
                        if (parentWidth <= 1440) currentVisibleSlide = 3;
                        if (parentWidth <= 1080) currentVisibleSlide = 1;
                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Card}
                                slideWidth={parentWidth < 800 ? parentWidth - 30 : 320}
                                carouselWidth={parentWidth}
                                data={data}
                                currentVisibleSlide={currentVisibleSlide}
                                maxVisibleSlide={3}
                                useGrabCursor
                            />
                        );
                    }}
                />
                <>
                    <Fab
                        style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 ,display:"none"}}
                        size="small"
                        color="primary"
                        onClick={() => {
                            ref.current?.goBack();
                        }}
                    >
                        <ArrowBackIcon />
                    </Fab>
                    <Fab
                        style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 ,display:"none"}}
                        size="small"
                        color="primary"
                        onClick={() => {
                            ref.current?.goNext(6);
                        }}
                    >
                        <ArrowForwardIcon />
                    </Fab>
                </>
            </div>
        </div>
    )

}

export default Trending