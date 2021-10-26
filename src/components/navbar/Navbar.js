import React from 'react'
import Styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { FiBell,FiChevronDown } from "react-icons/fi";
import {FcAssistant} from "react-icons/fc"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div  className={` ${Styles.navbarSection}` }>
          <nav className="navbar navbar-expand-lg">
      <div className="container mt-3 mb-2">
        <Link className="navbar-brand" to="/"><img src={'./assets/logoNav.PNG'}  alt="logo"/></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end align-items-center ${Styles.navbarSectionMain}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-0">
             <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className={`d-flex ${Styles.navItems}`}>
                <FcAssistant style={{marginTop:5}}/>
                  <span className={Styles.amount}>3K</span>
                  <span className={Styles.title}>Gains </span> 
                  <FiChevronDown className={Styles.iconDropDown}/>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className={`d-flex ${Styles.navItems}`}>
                <FcAssistant style={{marginTop:5}}/>
                  <span className={Styles.amount}>0</span>
                  <span className={Styles.title}>Tickets</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <div className={`d-flex ${Styles.navItems}`}>
                <FcAssistant style={{marginTop:5}}/>
                  <span className={Styles.amount}>34 ETH</span>
                  <span className={Styles.title}>:0x99C0..f455</span>
                </div>
              </Link>
            </li>
            <li className="nav-item  px-3">
              <Link className="nav-link" to="/">
             
                   <FiBell className={Styles.bellIcon}/>
               
              </Link>
            </li>
            <li className={`nav-item px-3 ${Styles.profile}`}>
              <Link className="nav-link" to="/">
                <div className="d-flex navItem">
                  <span className={Styles.title}>Alexander</span>
                  <CgProfile style={{height:32,width:32,marginTop:-5, marginLeft:10, color:"#11302D"}}/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar
