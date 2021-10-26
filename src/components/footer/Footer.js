import React from "react";
import { Link } from "react-router-dom";
import { BsChevronCompactRight ,BsInstagram } from "react-icons/bs";
import { RiLinkedinFill,RiFacebookFill,RiMusicLine } from "react-icons/ri";
import { FaTelegramPlane} from "react-icons/fa";
// import {TiSocialFacebook} from "react-icons/ti"
import { AiOutlineTwitter,AiFillYoutube,AiOutlineGithub} from "react-icons/ai";
import Styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={Styles.footerSection}>
      <footer className="text-center ">
        <section className="py-3">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-3 col-xl-3 ">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img src="./assets/logo.PNG" alt="logo" />
                </h6>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 ">
                <h6 className="mb-4">Company</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Careers
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Private Sales
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Submit your Project
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3">
                <h6 className="mb-4">Help</h6>

                <p>
                  <Link to="/" className="text-reset">
                    Support
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Cookie Policy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Lightpaper
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0">
                <h6 className="mb-4">Subscribe</h6>
                <div className={Styles.subscribe}>
                  <input type="email" placeholder="Enter Email" />
                  <BsChevronCompactRight className={Styles.inputicon} />
                </div>
                <ul className={Styles.socialLInks}>
                  <li>
                    <Link to="/" className="text-reset">
                      <FaTelegramPlane className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <AiOutlineTwitter className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className={`text-reset ${Styles.textStyle}`}>
                      <p>M</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <AiFillYoutube className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <AiOutlineGithub className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <BsInstagram className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <RiLinkedinFill className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <RiFacebookFill className={Styles.socialIcon} />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-reset">
                      <RiMusicLine className={Styles.socialIcon} />
                    </Link>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className={Styles.copyRight}>
          <p> © GAINS Associates</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
