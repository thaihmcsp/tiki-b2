import React from 'react';
import styles from './ProfileLeft.module.css';
function ProfileManuLeft(props) {
  return (
    <div className={styles.profileListManuLeft}>
      <h2>{props.header}</h2>
        {props.infors.map((infor,index) => {
          return(
            <div key={index} className= {styles.profileListManuLeftlisticon}>
             <div className= {styles.profileListManuLeftimg}>
             <img src={infor.icon} />
              <p>
                <span>{infor.title}</span>
                <br />
                <span>{infor.title1}</span>
              </p>
             </div>
              <button>{infor.button}</button>
            </div>
          )
        })}
    </div>
  )
}

export default ProfileManuLeft;
