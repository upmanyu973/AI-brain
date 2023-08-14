import React from 'react';
import Image from 'next/image';
import styles from "./influencer.css"

const Influencer = () => {
    const influencerData = [
        {
            id: 1,
            path: "/influencer.png",
        },
        {
            id: 2,
            path: "/influencer.png",
        }
    ]
    return (
        <div class="container">
            <div class="row influencerRow">
                <h3 class="d-flex justify-content-center mb-5 mt-5  p-2 categoryHeading">Influencer’s Pick</h3>
                {
                    influencerData.map((item, index) => {
                        return (
                            <div class="col-6 mt-5 d-flex justify-content-center" key={item?.id}>
                                    <div class="newLaunchDetailsIcon">
                                        <img class ="influencerImg" alt="influencerImg" src={item?.path} />
                                    </div>
                                    <div class="newLaunchDetailDiv">
                                    <div class="newLunchiconsContainer">
                                    <img class="Peopleimg" alt="people" src="/influencerPeople.png" />
                                       
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
                                        <button class="discoverBtn">Discover Now</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
<div class="mt-5 pt-3 d-block">
            <button class="m-auto mt-5 moreBtn">More</button>
</div>
        </div>
    )
}

export default Influencer