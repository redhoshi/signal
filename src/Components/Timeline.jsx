import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const milestones = [
  {
    id: 1,
    date: '1991年',
    title: '包装廃棄物規制令の公布/施行',
    description: `包装物の製造・流通業者に、包装廃棄物を自ら回収し、再利用することを義務付けた。`
  },
  {
    id: 2,
    date: '1998年',
    title: '回収率が72%を下回る',
    description: `1991年に公布/施行された包装廃棄物規制令の回収率が72%を下回った。包装廃棄物の回収率が72%を下回った場合、強制的にデポジット制度が適用される規定があった`
  },
  {
    id: 3,
    date: '1999年',
    title: '強制デポジット制度に関する議論が開始',
    description:
      'リターナブル容器利用事業者(中小飲料、消費者団体、環境団体)とワンウェイ容器利用事業者(大規模飲料事業者、大ビール会社)の間で協議が行われる。連邦政府は当初国民の強制デポジット制度への風当たりなどから容器に税を課す税収制度の導入を検討していた。しかし、政治的な兼ね合いなどから強制デポジットの導入が最終的に決定した。この過程までに税収制度の他に多く議論や訴訟が起きた。'
  },
  {
    id: 4,
    date: '2003',
    title: 'デポジット制度の導入が開始',
    description:
      '2003年度時点では飲料業界はデポジット制度の導入に向けた全国の回収および清算システムの準備が整っていなかったため、混乱が起きた。'
  },
  {
    id: 5,
    date: '2006',
    title: '缶やPETをデポジット制度の対象に追加',
    description:
      'ビール瓶を筆頭とするリターナブル容器の回収に加えて、缶やPETにも幅を広げる改正を行う（ただし缶やPETは中身の飲み物の種類による）。また同時に回収の機械化も開始された。'
  },
  {
    id: 6,
    date: '2019',
    title: 'エナジードリンク等の缶をデポジット制度の対象に追加',
    description:
      'エナジードリンクなどの缶も回収対象になった。'
  },
  {
    id: 7,
    date: '2022',
    title: '全てのPETと飲料缶がデポジット制度の対象に',
    description:
      '中身を問わず、すべての使い捨てPETと飲料缶は、回収対象に（乳製品のみ例外）'
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.800')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'block'
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: '40px', md: '40px' }}
      ml={{ base: '0', md: '40px' }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue('gray.600', 'gray.200')}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Milestones;
