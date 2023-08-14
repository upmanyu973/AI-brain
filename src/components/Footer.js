'use client'
import React from 'react'
import styles from "./footer.css";
import Image from 'next/image';


const Footer = () => {
  const companyLinks = ["About Us", "Vision", "Mission", "Contact Us"];
  const productLinks = ["Buisness", "Culture", "Knowledge", "Start Ups"];
  const resoucesLinks = ["News", "Blogs", "FAQ", "Videos"];


  return (
    <div class="container footerContainer">
      <div class="row footerContainer1">
        <div class="col-6">
          <div class="row mb-3">
            <p class="subscribeHeading">Subscribe Our News letter</p>
            <div class="emaiContainerFooter">
              <input className='emailInpFooter' type='email' placeholder='Enter Your Mailing Address' onChange={(e) => console.log(e.target.value)} />
              <img class="emailArrow" alt="Email-enter-arrow" src="/bi_arrow-down.png"></img>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-4">
              <p class="subHeadingSubscribe">COMPANY</p>
              <ul class="footerColumn1Links flex-column">
                {companyLinks.map((item, index) => {
                  return (
                    <li class="nav-item">
                      <a class="footerColumn1Links" aria-current="page" href="#">{item}</a>
                    </li>
                  );
                })
                }
              </ul>
            </div>
            <div class="col-4">
              <p class="subHeadingSubscribe">PRODUCTS</p>
              <ul class="footerColumn1Links flex-column">
                {productLinks.map((item, index) => {
                  return (
                    <li class="nav-item">
                      <a class="footerColumn1Links" aria-current="page" href="#">{item}</a>
                    </li>
                  );
                })
                }
              </ul>
            </div>
            <div class="col-4">
              <p class="subHeadingSubscribe">RESOURCES</p>
              <ul class="footerColumn1Links flex-column">
                {resoucesLinks.map((item, index) => {
                  return (
                    <li class="nav-item">
                      <a class="footerColumn1Links" aria-current="page" href="#">{item}</a>
                    </li>
                  );
                })
                }
              </ul>
            </div>
          </div>

        </div>
        <div class="col-6">
          <div class="row">
            <p class="subscribeHeading">Become A Contributor </p>
            <button class="LaunchProdBtn">Lauch Your Product</button>
          </div>
          <h6 class="followHeading mt-5">FOLLOW US ON SOCIAL MEDIA</h6>
        <div class="socialIcons">
         <img class="socialIconsImg1" alt="twitter" src="/twitter.png"/>
         <img class="socialIconsImg2" alt="instagram" src="/instagram.png"/>
         <img class="socialIconsImg3" alt="google" src="/google.png"/>
         <img class="socialIconsImg4" alt="facebook" src="/facebook.png"/>
         <img class="socialIconsImg5" alt="linkedin" src="/linkedin.png"/>
        </div>

        <div class="footerColumn2descDiv">
          <span class="footerColumn2Desc">Terms & Conditions</span>
          <span class="footerColumn2Desc">Privacy Policy</span>
          <span class="footerColumn2Desc">Cookies Policy</span>
        </div>
        </div>
      </div>
      <div class='borderLineFooter'></div>
      <p className='copyrightPara mt-2 d-flex justify-content-center align-item-center'>copyright</p>
    </div>
  )
}

export default Footer