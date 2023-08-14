import React from 'react';
import styles from "./newLaunches.css";
import Image from 'next/image';

const NewLaunches = () => {
    const newLaunches = [
        {
            id: 1,
            path: "/newLaunch1.png",
        },
        {
            id: 2,
            path: "/newLaunch2.png",
        },
        {
            id: 3,
            path: "/newLaunch3.png",
        },
        {
            id: 4,
            path: "/newLaunch4.png",

        }
    ]
    return (
        <div class="container newLaunchesContainer">
            <h3 class="d-flex justify-content-center p-2 categoryHeading">New Launches</h3>
            <p class='newLaunchDesc'>Find topics based on your interest, find curated content to increase your day to
                <br></br>
                day knowledge and stay update with latest news and industry trends</p>
            <div class="row newLaunchCategoryRow">
                {newLaunches.map((item, index) => {
                    return (
                        <div class="col-6 mb-5" key={item?.id}>
                            <div className='cardConatiner'>
                                <div class="newLaunchImgCont">
                                    <img class="newLaunchImg" alt="newLaunch" src={item?.path} />
                                </div>
                                <div class="newLaunchDetailDiv">
                                    <div class="newLaunchDetailsIcon">
                                        <img alt="divImg" src="/newLaunchDetailsIcon.png"/>
                                    </div>
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
            </div>
        </div>
    )
}

export default NewLaunches