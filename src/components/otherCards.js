import React from 'react';
import styles from "./otherCards.css";
import Image from 'next/image';

const OtherCards = () => {
    const otherCards = [
        {
            id: 1,
            path: "./otherCard1.png",
            desc1: "TRENDING NOW",
            desc2: "Find interesting blogs that are trending now",
        },
        {
            id: 2,
            path: "./otherCard2.png",
            desc1: "NEW RELEASES",
            desc2: "Catch up on all the latest blogs",
        },
        {
            id: 3,
            path: "./otherCard3.png",
            desc1: "POPULAR PICKS",
            desc2: "Find the blogs popular among the readers",
        },

    ]
    return (
        <div class="otherCardsContainer">
            <div class="otherCardsrow">
                {
                    otherCards.map((item, index) => {
                        return (
                            <div class="col-4 otherCard" key={item?.id}>
                                <div class="w-100 d-flex justify-content-center p-2 mb-2">
                                <div class="otherCardImgDiv">
                                    <img class="otherCardImg" alt="othercard-img" src={item?.path} />
                                </div>
                                </div>
                                <h6 class="text-center otherCardDesc1">{item?.desc1}</h6>
                                <p class="text-center otherCardDesc2">{item?.desc2}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtherCards