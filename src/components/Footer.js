import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <footer>
      <div className="footer-inner">
        <a target="_blank" rel="noopener noreferrer" href='https://t.me/UpDogBsc' className="Telegram social">
            <FontAwesomeIcon icon={faTelegram} size="3x" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/UpdogBSC' className="twitter social" >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://updogbsc.medium.com/' className="Medium social">
            <FontAwesomeIcon icon={faMedium} size="3x" />
        </a>
      </div>
    </footer>
  );
}