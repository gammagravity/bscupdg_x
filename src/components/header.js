import React from "react";
import UpDogLogo from '../title-withshadowAsset_1.png';



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
              <a target="_blank" rel="noopener noreferrer" href='https://www.dextools.io/app/pancakeswap/pair-explorer/0x817345db46c869c96da5139ca2b1c78e1f4715dc'>CHART UPDOG</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href='https://bscscan.com/address/0x400613f184d1207f5c07a67d67040a4e23e92feb'>CONTRACT</a>
            </li>
            <li className='btn'>
              <a target="_blank" rel="noopener noreferrer" href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x400613f184D1207f5C07a67D67040A4e23E92feB'>BUY UPDOG</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
