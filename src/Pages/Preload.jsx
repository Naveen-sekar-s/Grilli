import React from "react";

const Preload = () => {
  let someFunc = () => {
    const preloader = document.querySelector("[data-preload]");
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
    return;
  };

  window.addEventListener("animationstart", someFunc);

  return (
    /* - #PRELOADER */

    <div className="preload" data-preload>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  );
};

export default Preload;
