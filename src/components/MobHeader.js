import React from "react";
import Link  from "gatsby-link";

const MobHeader = () => (
  <header className="mobHeader">
    <div>
      <Link to="" className="MobMenuText">Menu</Link>
    </div>
    <div>
      <Link to="/">
        <h1 className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="274" height="37" viewBox="0 0 274.2 374.91"><title>Asset 1</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <polygon points="111.25 0 80.09 0 1 124.97 32.16 124.97 111.25 0"/>
                <polygon points="110.25 249.94 79.09 249.94 0 124.97 31.16 124.97 110.25 249.94"/>
                <polygon points="115.6 124.97 146.76 124.97 225.85 249.94 194.69 249.94 115.6 124.97"/>
                <polygon points="115.6 374.91 146.76 374.91 225.85 249.94 194.69 249.94 115.6 374.91"/>
                <polygon points="164.05 249.94 195.21 249.94 274.2 124.97 243.14 124.97 164.05 249.94"/>
              </g>
            </g>
          </svg>
        </h1>
      </Link>
    </div>
    <div>
      <Link to="" className="MobMenuText" >
        Email
      </Link>
    </div>
  </header>
);

export default MobHeader;
