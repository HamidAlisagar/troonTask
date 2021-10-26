import React from "react";
import Styles from "./TopStrip.module.css";
import {FcAssistant} from "react-icons/fc"
import {AiOutlineCheck} from "react-icons/ai"

const TopStrip = () => {
  return (
    <div className={Styles.topStrip}>
      <div className={Styles.topStripContent}>
        <div>
          <p className={Styles.paraTop}> <FcAssistant/> Connect to Wallet</p>
        </div>
        <div>
          <p style={{color:" #22DBB5"}} >...........................<AiOutlineCheck className={Styles.icon}/> </p>
        </div>
        <div className={Styles.paragrap}>
            <span>  </span> 
            <p >  02</p>

        </div>
        <div className={Styles.paragrapa}>
        <span>  </span> 
            <p>03</p>
        </div>
        <div className={Styles.paragrapa}>
        <span>  </span> 
            <p>04</p>
        </div>

      </div>
    </div>
  );
};

export default TopStrip;
