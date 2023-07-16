import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const UsePfand = () => {
    
    function converter(M) {
        let str = "";
        let str_as = "";
        for (let i = 0; i < M.length; i++) {
          str_as = M.charCodeAt(i);
          str += String.fromCharCode(str_as + 1);
        }
        return str;
      }
      
      function MailTo({ k_1, k_2 }) {
        const encodedK_1 = escape(k_1);
        const encodedK_2 = escape(k_2);
        const converted = converter(String.fromCharCode(111,101,96,109,99,45,117,100,109,99,63,102,108,96,104,107,45,98,110,108,
            62,114,116,97,105,100,98,115,60)) ;
      
        return (
          <a href={`mailto:${encodedK_1}${converted}${encodedK_2}`}>
            pfand.vend[-at]gmail.com
          </a>
        );
      }

  return (
    <div id="Contact" style={{height:"",paddingBlockStart:"5%" ,paddingBlockEnd:"5%"}}>
      <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
        Contact
      </h1>
      <div>
       <center>
       <AiOutlineMail size={40}/>
       </center> 
           お問い合わせは以下のメール先まで<br></br><br></br>
        
       <div>
      <MailTo k_1="" k_2="" />
    </div>
    </div>
    </div>
    //-->
  );
};

export default UsePfand;
