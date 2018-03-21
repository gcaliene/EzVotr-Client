import React from 'react';

export const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo center">PoliVox</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">About</a>
        </li>
        <li>
          <a href="badges.html">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
