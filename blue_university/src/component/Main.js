import React from "react";
import classes from "./styles/Main.module.css";

function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div>
          <img
            src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/icon-experiments.svg"
            alt=""
          />
          <h3>Experiments</h3>
        </div>
        <p>
          Join the CEO of AdEspresso alongside the best social media marketers
          in a series of off-the-books special live events dedicated to
          AdEspresso University members.
        </p>
      </div>
      <div className={classes.content}>
        <div>
          <img
            src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/icon-live-webinars.svg"
            alt=""
          />
          <h3>Webinars</h3>
        </div>
        <p>
          Join the CEO of AdEspresso alongside the best social media marketers
          in a series of off-the-books special live events dedicated to
          AdEspresso University members.
        </p>
      </div>
      <div className={classes.content}>
        <div>
          <img
            src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/icon-community.svg"
            alt=""
          />
          <h3>community</h3>
        </div>
        <p>
          Join the CEO of AdEspresso alongside the best social media marketers
          in a series of off-the-books special live events dedicated to
          AdEspresso University members.
        </p>
      </div>
      <div className={classes.content}>
        <div>
          <img
            src="https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/icon-ad-software.svg"
            alt=""
          />
          <h3>Expresso</h3>
        </div>
        <p>
          Join the CEO of AdEspresso alongside the best social media marketers
          in a series of off-the-books special live events dedicated to
          AdEspresso University members.
        </p>
      </div>
    </div>
  );
}

export default Main;
