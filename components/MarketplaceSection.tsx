import React, { useState } from 'react';
import {
    Box, Image, Heading, Text, Divider, Center, Circle,
    IconButton, Icon
} from "@chakra-ui/react"
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import AnimateInView from './AnimateInView';

const marketplaceData = [
    {
      heading: "Sign Up",
      body: "Create a free account and verify your details to join the new art economy.",
    },
    {
      heading: "Fund Your Wallet",
      body: "With your credit / debit card (Visa, Mastercard or other supported  cards) or via bank transfer you can fund your wallet and start bidding.",
    },
    {
      heading: "Bid, Sell, Earn",
      body: "Bid on splits or leases of artworks and re-trade in the secondary market to earn interests in your wallets. ",
    },
];

const MarketplaceHeading = (props: any) => (
  <AnimateInView animation="SlideDown" delay={1}>
    <Heading
      mb={[10, 20]}
      color="#fff"
      fontSize={["2.7rem", "5xl", "7xl"]}
      fontWeight={500}
      position="relative"
      lineHeight={['normal', '76px']}
      {...props}
    >
      The marketplace
      <Image
        src="/perfect.png"
        alt=""
        position="absolute"
        // transform="rotate(-10deg)"
        w={props.centerImg ? 32 : 48}
        top={[-6, -10]}
        left={props.centerImg ? 16 : "29%"}
        right={props.centerImg ? 0 : ""}
        mx="auto"
      />
      <br />
      <Text
        as={"span"}
        fontSize={['46px', '60px', '84px']}
        style={{
          color: "transparent",
          strokeWidth: 0.75,
          WebkitTextStrokeWidth: 0.75,
          WebkitTextStrokeColor: "#fff",
          WebkitTextFillColor: "transparent",
        }}
      >
        for African art.
      </Text>
    </Heading>
  </AnimateInView>
);

const MarketplaceSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <Box
          as="section"
          backgroundImage="url('/marketplace-bg.png')"
          backgroundRepeat={"no-repeat"}
          backgroundSize="cover"
          backgroundPosition="bottom"
          height={['auto', 'auto', 'auto', 900]}
          pt={20}
          pb={[20, 32]}
        >
          <Box
            as={Row}
            className="page-container"
            height="100%"
            justifyContent="space-between"
            alignItems="flex-end"
        >
            <Box as={Col} xs={12}  lg={7} order={[2, 2, 2, 1]}>
              <MarketplaceHeading
                display={["none", "none", "none", "block"]}
              />

              <AnimateInView animation="SlideUp">
                <Box
                  style={{
                    backgroundColor: "rgb(168 168 168 / 33%)",
                    backdropFilter: "blur(50px)",
                  }}
                  py={[4, 4, 10, 16]}
                  px={[1, 3, 6, 10]}
                  borderRadius="3xl"
                >
                  <Box as={Row} className="d-none d-lg-flex">
                    {marketplaceData.map((item, i) => (
                      <Box as={Col} md={4} key={i}>
                        <Center
                          mb={5}
                          justifyContent="center"
                          position={"relative"}
                        >
                          <Circle
                            bg="#DB4411"
                            color="#fff"
                            borderRadius={"full"}
                            size={[20, 14]}
                            fontSize={24}
                            fontWeight={[500, 400]}
                          >
                            {i + 1}
                          </Circle>

                          <Divider
                            orientation="horizontal"
                            position={"absolute"}
                            display={i == 2 ? "none" : "block"}
                            right={-70}
                            width={"50%"}
                          />
                        </Center>

                        <Box key={item?.heading}>
                          <Text
                            textAlign={"center"}
                            color="white"
                            fontWeight={['semibold', 400]}
                            fontSize="20px"
                            mb={[0, 3]}
                          >
                            {item.heading}
                          </Text>
                          <Text textAlign={"center"} fontSize="sm" color="white" fontWeight={300}>
                            {item?.body}
                          </Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    as={Row}
                    className="justify-content-center d-flex d-sm-flex d-lg-none"
                    mt={[5, 0, 0, 0]}
                  >
                    <Box as={Col} xs={10}>
                      <Center
                        // mb={2}
                        mt={3}
                        justifyContent="center"
                        position={"relative"}
                      >
                        <Circle
                          bg="#DB4411"
                          color="#fff"
                          borderRadius={"full"}
                          size={10}
                        >
                          {currentIndex + 1}
                        </Circle>
                      </Center>
                      <Box key={marketplaceData[currentIndex]?.heading} p={5}>
                        <Text
                          textAlign={"center"}
                          color="white"
                          fontWeight="medium"
                          fontSize={['2xl', '4xl']}
                          mb={3}
                        >
                          {marketplaceData[currentIndex]?.heading}
                        </Text>
                        <Text textAlign={"center"} color="white">
                          {marketplaceData[currentIndex]?.body}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </AnimateInView>

              <Box
                as={Col}
                xs={12}
                className="justify-content-center d-flex d-sm-flex d-lg-none"
                mt={5}
                gap={3}
              >
                <IconButton
                  aria-label=""
                  variant={"ghost"}
                  size="xs"
                  icon={
                    <Icon
                      as={FaCircle}
                      color={currentIndex == 0 ? "#ff0000" : "#fff"}
                      onClick={() => setCurrentIndex(0)}
                    />
                  }
                />
                <IconButton
                  aria-label=""
                  variant={"ghost"}
                  size="xs"
                  icon={
                    <Icon
                      as={FaCircle}
                      color={currentIndex == 1 ? "#ff0000" : "#fff"}
                      onClick={() => setCurrentIndex(1)}
                    />
                  }
                />

                <IconButton
                  aria-label=""
                  variant={"ghost"}
                  size="xs"
                  icon={
                    <Icon
                      as={FaCircle}
                      color={currentIndex == 2 ? "#ff0000" : "#fff"}
                      onClick={() => setCurrentIndex(2)}
                    />
                  }
                />
              </Box>
            </Box>

            <Box as={Col} xs={12} md={12} lg={5} order={[1, 1, 1, 2]}>
              <MarketplaceHeading
                display={["block", "block", "none"]}
                textAlign="center"
                centerImg = {false}
              />
              <AnimateInView animation="SlideLeft">
                <Image
                  src="/iphone12.png"
                  alt=""
                  h={['420px', '670px', '680px']}
                  mx={"auto"}
                  mb={[5, 5, 5, 0]}
                />
              </AnimateInView>
            </Box>
          </Box>
        </Box>
    )
}

export default MarketplaceSection