import React from "react";
import Link from "gatsby-link";

const MobHeader = ({ hideMobMenu }) => (
  <header className="mobHeader">
    <div onClick={() => hideMobMenu(isMenuVisible => !isMenuVisible)} className="MobMenuText">
      {`< Menu >`}
    </div>
    <div>
      <Link to="/">
        <h1 className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 274.2 374.91"><g data-name="Layer 2"><g data-name="Layer 1"><path fill="#6799B2" d="M111.25 0H80.09L1 124.97h31.16L111.25 0zM110.25 249.94H79.09L0 124.97h31.16l79.09 124.97z" /><path fill="#576D8E" d="M115.6 124.97h31.16l79.09 124.97h-31.16L115.6 124.97zM115.6 374.91h31.16l79.09-124.97h-31.16L115.6 374.91z" /><path fill="#65BEC2" d="M164.05 249.94h31.16l78.99-124.97h-31.06l-79.09 124.97z" /></g></g></svg>
        </h1>
      </Link>
    </div>
    <div to="" className="MobMenuText" >
      {`< Email >`}
    </div>
  </header>
);

export default MobHeader;
