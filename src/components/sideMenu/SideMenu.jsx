import { useState } from "react";
import "./SlideMenu.scss";

function SideMenu() {
  // const [selected, setSelected ] =useState(false);
  return (
    <div className="sideMenu">
      <div className="sections">
        <div className="sideBar">
          <div className="cricle">
            <span className="cricle1"></span>
            <span className="cricle2"></span>
            <span className="cricle3"></span>
          </div>
          <img src="./img/logo.png" alt="img" className="logo" />
          <div className="lists">
            <img src="./img/group1.png" alt="img" />
            <img src="./img/food.png" alt="img" />
            <img src="./img/img.png" alt="img" />
            <img src="./img/group1.png" alt="img" />
            <img src="./img/img.png" alt="img" />
          </div>
        </div>
        <div className="categories">
          <div className="header">
            <h1>Explore</h1>
          </div>
          <div className="items">
            <div className="item selected">
              <img src="./img/tech.png" alt="img" />
              <span>Home</span>
            </div>
            <button className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Music</span>
            </button>
            <div className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Education</span>
            </div>
            <div className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Science & Tech</span>
            </div>
            <div className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Entertainment</span>
            </div>
            <div className="item">
              <img src="./img/tech.png" alt="img" />
              <span>Student Hubs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sideFooter">
        <div className="top">
          <img src="./img/vector.png" alt="vector" />
        </div>
        <div className="bottom">
          <div className="left">
            <img src="./img/user.png" alt="user" />
            <span>sophiefortune</span>
          </div>
          <div className="right">
            <img src="./img/mic.png" alt="mic" />
            <img src="./img/mic.png" alt="mic" />
            <img src="./img/mic.png" alt="mic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
