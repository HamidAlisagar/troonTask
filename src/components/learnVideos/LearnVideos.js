import React from "react";
import Styles from "./LearnVideos.module.css";
import {BsCheckCircle } from "react-icons/bs";

import {GiCombinationLock } from "react-icons/gi";
import ApiUsed from "../ApiUsed/ApiUsed";
const LearnVideos = () => {
  return (
    <div className={` container-fluid ${Styles.learnVideosSection}`}>
      <div className="row">
        <div className="col-md-9 col-lg-9 col-12">
          <div className={Styles.LearnVideosWrapper}>
            <div className={Styles.headingInfo}>
              <h2>
                <span>Learn</span> From Videos
              </h2>
              <p>
                You will need at least for <span>7/10</span> each quiz. If you
                fail more than 3 times you cannot be whitelisted.
              </p>
            </div>
            <h2> Results of The CEO Video Quiz</h2>
            <div className={Styles.resultSection}>
                

            </div>
            <ApiUsed/>
          </div>
          
        </div>

        {/* Side bar section __________________________________________ */}
        <div className="col-md-3 col-lg-3 col-12">
          <div className={Styles.sidebarWrapper}>
            <div className={Styles.sidebarContent}>
              <p className={Styles.para}> 1. CEO <BsCheckCircle style={{marginTop:-8}}/></p>
              <img src="./assets/ceo.PNG" alt="CEO" />
              <div className={Styles.sidebarContentBottom}>
                 <div className={Styles.quizStatus}>
                   <p className={Styles.para} >20.00</p>
                   <p  className={Styles.quizpara}>Score</p>
                 </div>
                 <div  className={Styles.quizStatus}>
                   <p className={Styles.para}>05 Quiz</p>
                   <p  className={Styles.quizpara}>Total Questions</p>
                 </div>
                 <div className="px-3 mt-2">
                   <p className={Styles.para}> 04 Quiz</p>
                   <p className={Styles.quizpara}>Correct</p>
                 </div>
                 

              </div>
              
            </div>
            <div className={Styles.sidebarContent}>
              <p>3. The USP <GiCombinationLock style={{marginTop:-8}}/></p>
              <img src="./assets/Cap.PNG" alt="CEO" />
            </div>
            <div className={Styles.sidebarContent}>
              <p>3. The Product <GiCombinationLock style={{marginTop:-8}}/></p>
              <img src="./assets/revenue.PNG" alt="CEO" />
            </div>
            <div className={Styles.sidebarContent}>
              <p>4. The Launch <GiCombinationLock style={{marginTop:-8}}/></p>
              <img src="./assets/bitcoin.PNG" alt="CEO" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnVideos;
