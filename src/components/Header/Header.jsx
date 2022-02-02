import React, {useEffect, useState} from "react";
import NavItem from "./NavItem";
import SignButton from "./SignButton";
import SignInIcon from "./SignInIcon";
import SignUpIcon from "./SignUpIcon";

export default function Header({toggleMenu, setToggleMenu}) {
  const [item] = useState([{main: 'Expertise', submenu: []}, {main: 'Industries', submenu: []}, {main: 'News', submenu: []}, {main: 'Partners', submenu: []},
    {main: 'Careers', submenu: []}, {main: 'About Us', submenu: ['']}]);

  return (
    <header>
      <nav>
        <div className="wrapper">
          <a href="#">
            <img src="./img/icons/logo-generic.svg" alt="logo" className="logo"/>
          </a>
          <button className={toggleMenu ? "toggle-menu-btn close" : "toggle-menu-btn"} onClick={() => setToggleMenu(prev => !prev)} type={"button"} data-toggle={"collapse"}
                  data-target={"#navbarToggler"}><span className="toggle-menu-btn-icon"/>
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse  show" : "navbar-collapse"}>
          <ul className="main-menu">
            {item && item.map(item => <NavItem key={item.main} valueName={item.main} item={item}/>)}
          </ul>
          <div className="button-block">
            <SignButton value="signIn" icon={<SignInIcon/>} className="btn signIn" textValue="Sign In"/>
            <SignButton value="signUp" icon={<SignUpIcon/>} className="btn signUp" textValue="Sign Up"/>
          </div>
        </div>
      </nav>
    </header>
  )
}