import React from "react";
import {
  Card, CardBody, CardFooter, Box, Flex, Text, Avatar, Heading, Stack, Divider, ButtonGroup, IconButton, Image, Button, Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton, HStack,
  chakra
} from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="" style={{ height:"",paddingBlockStart:"5%" }}>
      {/*}
      <h1 style={{ fontSize: "50px", paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%", paddingBlockEnd: "5%" }}>
        Interview
  </h1>*/}
    <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
        デポジット制度を日本で導入するなら
    </chakra.h1>
      <div class="buble">
        <p>ドイツでは  ＰＥＴ１本約４０円でデポジット制度が適用されています。<br></br>この制度を日本に導入するとしたら、あなたは賛成/反対ですか？またその理由を教えてください。</p>
      </div>
      <div class="fold">
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>25歳社会人男性</Heading>
                <Text>
                  リサイクル/環境について考えるきっかけになる。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='blue'>
                      賛成
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>25歳社会人女性</Heading>
                <Text>
                  現在ペットボトルの日にまとめて捨てているものをデポジットの場所にて回収してもらうなら手間はあまり変わらない。それならお金が戻ってくる方がいい。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='blue'>
                      賛成
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>21歳大学生男性</Heading>
                <Text>
                  そのくらい高い値段の方が，みんな返しに行こうという気持ちになると思うから。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='blue'>
                      賛成
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>25歳大学院生男性</Heading>
                <Text>
                  面倒な手続きはしないほうが良い。既定の場所に持ち帰るのが面倒。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='red'>
                      反対
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>25歳社会人男性</Heading>
                <Text>
                  制度があまり浸透しておらず、物価上昇の激しい現在の日本で唐突に40円の価格上乗せは理解を得られないと思う。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='red'>
                      反対
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div class="Card_size">
          <Card maxW='sm'>
            <CardBody>
              <center><BsPersonCircle size={100} /></center>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>21歳大学生女性</Heading>
                <Text>
                  地方の特に田舎などで利用出来る場所が限られていると、恩恵を受けられないなどの格差が生じると考えられる。制度を実現させるには、自治体のゴミ収集との連携や地域による価格設定の調整といった工夫が必要不可欠であると考える。
                </Text>
                <HStack spacing={0} justifyContent="center">
                  {['lg'].map((size) => (
                    <Tag size={size} key={size} variant='outline' colorScheme='red'>
                      反対
                    </Tag>
                  ))}
                </HStack>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
