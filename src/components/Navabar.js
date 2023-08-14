'use client'
import { useState } from "react";
import styles from "./navbar.css";
import Image from 'next/image';
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const menuItems = ["Business", "Knowledge", "Culture", "Start Ups"];
  const onSearch = (value) => {
    console.log(value);
  }
  return (
    <div class="container navbarAI">
      <div class="row navcontainer">
        <div class="col-2 ps-0">
          <img class="logo" alt="Logo" src="/Logo.png" />
        </div>
        <div class="col-4 menuItemContainer">
          <ul class="nav justify-content-center">
            {menuItems.map((item, index) => {
              return (
                <li class="nav-item" key={index}>
                  <a class="nav-link menuItemLink" aria-current="page" href="#">{item}</a>
                </li>
              )
            })}

          </ul>
        </div>
        <div class="col-6 d-flex  gap-4 justify-content-end align-items-center">
          <form class="d-flex searchBoxContainer">
            <input class="form-control me-2 serachBox" type="search" placeholder="Quick Search" aria-label="Search" onChange={(e) => {
              setSearchValue(e.target.value)
            }} />
            <img class="searchImg" alt="search" src="/bi_search.png" onClick={() => { onSearch(searchValue) }} />
          </form>
          <div className="d-flex gap-3 loginBtnContainer">
            <button class="btn LaunchProjBtn" type="submit">Launch your Project</button>
            <button class="btn login-btn" type="submit">Login/Signup</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar