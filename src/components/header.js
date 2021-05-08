import React from "react";
import Logo from '../title-withshadowAsset_1.png';

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'><img src={Logo}/></div>
        <nav>
          <ul>
            <li>
              <a href='/'>ROADMAP</a>
            </li>
            <li>
              <a href='/'>TOKENOMICS</a>
            </li>
            <li>
              <a href='/'>WHITEPAPER</a>
            </li>
            <li>
              <a href='/'>CONTRACT</a>
            </li>
            <li className='btn'>
              <a href='/'>BUY UPDOG</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
