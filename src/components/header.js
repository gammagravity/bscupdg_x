import React from "react";
import UpDogLogo from '../title-withshadowAsset_1.png';
import TwitterLogo from '../twitter.svg';
import MediumLogo from '../iconmonstr-medium-5.svg'
import TelegramLogo from '../iconmonstr-telegram-5.svg'
// import BlankLogo from '../blank.svg'


export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>
          <img src={UpDogLogo} alt=""/>
        </div>
        <nav>
          <ul>
          <li>
              <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/UpdogBSC'><img src={TwitterLogo} alt=""/></a>
              <a target="_blank" rel="noopener noreferrer" href='https://updogbsc.medium.com/'> <img src={MediumLogo} alt=""/></a>
              <a target="_blank" rel="noopener noreferrer" href='https://t.me/UpDogBsc'> <img src={TelegramLogo} alt=""/></a>
            </li>
            {/* <li>
              <a href='/'>TOKENOMICS</a>
            </li>
            <li>
              <a href='/'>WHITEPAPER</a>
            </li> */}
            <li className='btn'>
              <a href='/'>BUY UPDOG</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
