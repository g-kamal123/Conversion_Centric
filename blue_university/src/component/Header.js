import React, { useState } from "react";
import classes from "./styles/Header.module.css";

function Header() {
  const [showham, setShowham] = useState(false);
  const burgerHandler = () => {
    if(!showham)
    setShowham(true);
    else setShowham(false);
  };
  return (
    <div className={classes.header}>
      <div className={classes.linkcontent}>
        <img
          src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/logo-university.png"
          alt=""
        />
        <ul>
          <li>
            <a className={classes.subscribe}>Subscribe</a>
          </li>
          <li>or</li>
          <li>
            <a className={classes.login}>Login</a>
          </li>
        </ul>
        <div className={classes.ham} onClick={burgerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
        {showham && (
            <div className={classes.hamlinks}>
          <ul>
            <li>
              <a className={classes.subscribe}>Subscribe</a>
            </li>
            <li style={{color:'whitesmoke'}}>Or</li>
            <li>
              <a className={classes.login}>Login</a>
            </li>
          </ul>
          </div>
        )}
        <div className={classes.headerContent}>
            <p>
            <h3>Want to make FAcebook Advertising easy again?</h3>
            <span>Wlecome to AdEspresso University!</span>
            </p>
            <img src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/dude-graduated.png" alt=""/>
        </div>
      
    </div>
  );
}

export default Header;
