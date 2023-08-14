import React from 'react';
import styles from "./category.css"

const Categories = () => {
    const categoryItem1 = [
        {
            id: 1,
            path: "./automobile.png",
            name: "Automobile",
        },
        {
            id: 2,
            path: "./electronics.png",
            name: "Electronics",

        },
        {
            id: 3,
            path: "./medical.png",
            name: "Medical",

        }
    ]

    const categoryItem2 = [
        {
            id: 1,
            path: "./art.png",
            name: "Arts & Entertainment",
        },
        {
            id: 2,
            path: "./education.png",
            name: "Education",

        },
        {
            id: 3,
            path: "./food.png",
            name: "Food & Beverages",

        }
    ]

    const categoryItem3 = [
        {
            id: 1,
            path: "./appliances.png",
            name: "Home & Appliances",
        },
        {
            id: 2,
            path: "./personal-care.png",
            name: "Personal Care",

        },
        {
            id: 3,
            path: "./sports.png",
            name: "Sports",

        }
    ]


    return (
        <div class="container categoryContainer">
            <div class="row categoryRow ">
                <h3 class="d-flex justify-content-center p-3 categoryHeading">Categories</h3>
                <div class="col-4">
                    {categoryItem1.map((item, index) => {
                        return (

                            <div key={item?.id} class="categoryImageContainer">
                                <img class="categoryImage" alt={item?.name} src={item?.path} />
                                <h6>{item?.name}</h6>
                            </div>
                        )
                    })}
                </div>
                <div class="col-4">
                    {categoryItem2.map((item, index) => {
                        return (
                            <div key={item?.id} class="categoryImageContainer">
                                <img class="categoryImage" alt={item?.name} src={item?.path} />
                                <h6>{item?.name}</h6>
                            </div>
                        )
                    })}
                </div>
                <div class="col-4">
                    {categoryItem3.map((item, index) => {
                        return (
                            <div key={item?.id} class="categoryImageContainer">
                                <img class="categoryImage" alt={item?.name} src={item?.path} />
                                <h6>{item?.name}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Categories