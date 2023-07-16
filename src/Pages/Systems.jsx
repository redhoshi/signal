import React from "react";
import { Image } from "@chakra-ui/react";
import sys1 from '../Photo/3x/sys1.png'
import sys2 from '../Photo/3x/sys2.png'
import sys3 from '../Photo/3x/sys3.png'
import sys4 from '../Photo/3x/sys4.png'
import sys5 from '../Photo/3x/sys5.png'

const Home = () => {
  return (
    <div id="Pfand System" style={{height:"",paddingBlockEnd:"5%"}}>
      <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
        What's the Pfand System?
      </h1>
      <div class="fold">
        <div class="Card_size">
            PET1本あたりおよそ40円の預かり金
        <Image boxSize='300px' src={sys1}></Image>
        </div>
        <div class="Card_size">
            PETを返すとレシートが出力される
            <Image boxSize='300px' src={sys2}></Image>
        </div>
        <div class="Card_size">
            買い物をして
            <Image boxSize='300px' src={sys3}></Image>
        </div>
        <div class="Card_size">
            お会計をするときに
            <Image boxSize='300px' src={sys4}></Image>
        </div>
        <div class="Card_size">
            レシートを読み取ると預かり金が引かれる
            <Image boxSize='300px' src={sys5}></Image>
        </div>
      </div>

      <p style={{paddingLeft:"10%",paddingRight:"10%"}}>
      </p>
    </div>
  );
};

export default Home;
