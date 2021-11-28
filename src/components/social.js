// TODO: import "link" from Gatsby to use instead of <a> tag.
import React from "react";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

import "./social.css";

import Linkedin from "../images/linkedin-icon.js";
import Email from "../images/email-icon.js";
import Github from "../images/github-icon.js";
import Upwork from "../images/upwork-icon.js";

function Social(props) {

  const [emailToolTipStyles, setEmailToolTipStyles] = useState({ width: "0px", padding: "0px" });
  const [emailText, setEmailText] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);

  const getEmail = () => {

    if (emailToolTipStyles.width !== "0px") {
      setEmailToolTipStyles({width: "0px", padding: "0px" });
    } else {
      setEmailToolTipStyles({width: "235px", padding: "0px 15px" });

      var address1 = "jake"
      var address2 = "ch"
      var address3 = "solomon@gmail"
      var address4 = "com"

      setEmailText([address1, address2, address3, address4].join("."));
    }

  }

  return(
    <ul className={"social-container-" + props.display} >
      <li className={"social-icon-" + props.display}>
        <a href="https://github.com/jakesolomon" target="_blank" rel="noopener noreferrer" aria-label="Github Profile"><Github /></a>
      </li>
      <li className={"social-icon-" + props.display}>
        <a href="https://www.linkedin.com/in/jacobcsolomon/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Profile"><Linkedin /></a>
      </li>
      <li className={"social-icon-" + props.display}>
        <a href="https://www.upwork.com/o/profiles/users/~01f9345fe562f336b9/?viewMode=1" target="_blank" rel="noopener noreferrer" aria-label="Upwork Profile"><Upwork /></a>
      </li>
      <li className={"social-icon-" + props.display}>
        <div className={"email-tool-tip email-tool-tip-" + props.display} style={emailToolTipStyles} >
          {emailText}
          {!emailCopied ?
            <CopyToClipboard text={emailText}
              onCopy={() => setEmailCopied(true)}>
              <FontAwesomeIcon icon={faClipboard} style={{marginLeft: "10px", cursor: "pointer"}}/>
            </CopyToClipboard>
            :
            <FontAwesomeIcon
              icon={faClipboardCheck}
              onClick={() => setEmailCopied(false)}
              style={{marginLeft: "10px"}}
            />
          }
        </div>
        <button onClick={() => getEmail()} target="_blank" rel="noopener noreferrer" style={{cursor: "pointer"}} aria-label="Email" ><Email /></button>
      </li>
    </ul>
  );
}

export default Social;
