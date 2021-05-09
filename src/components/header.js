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
            <li>
              <a target="_blank" rel="noopener noreferrer" href='https://poocoin.app/tokens/0x400613f184d1207f5c07a67d67040a4e23e92feb'>CHART UPDOG</a>
            </li>
            <li>
              <a href='https://bscscan.com/address/0x400613f184d1207f5c07a67d67040a4e23e92feb'>CONTRACT</a>
            </li>
            <li className='btn'>
              <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x400613f184D1207f5C07a67D67040A4e23E92feB'>BUY UPDOG</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
