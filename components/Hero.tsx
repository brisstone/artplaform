import React from 'react';
import {
    Box, Image, Heading, Text, Divider
} from "@chakra-ui/react"
import { Col, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import AnimateInView from './AnimateInView';

const Hero: React.FC = () => {
    return (
        <Box
          as={Row}
          justify="center"
          py={[10, 10, 20, "40"]}
          className={styles.container}
          maxWidth="1360px"
          margin="auto"
        >
          <Box
            as={Col}
            xs={12}
            md={6}
            justifyContent="center"
            position={"relative"}
          >
            <Box position="relative">
              <Image
                alt=""
                src="/hero-invest-in-art.png"
                h={[110, 110, 212]}
                className="mx-auto rotate-forever"
                position="absolute"
                left={[2, -24]}
                top={[-2, 0]}
                zIndex="10"
              />
              <AnimateInView animation="SlideUp" distance={100}>
                <Image
                  alt=""
                  src="/hero-image.png"
                  h={["60", "60", "60", 420]}
                  className="mx-auto"
                />
              </AnimateInView>
            </Box>
            <Heading
              as="h1"
              position={["relative", "absolute", "absolute", "absolute"]}
              right={[0, -48, -48, -80]}
              top={["", -10, -10, -12]}
              fontSize={["5xl", "5xl", "5xl", "8xl"]}
              fontWeight="500"
              textAlign={["center", "center", "center", "left"]}
              mt={[10, 5, 5, 0]}
              lineHeight={['normal', '88px']}
            >
              <AnimateInView animation="SlideLeft">
                Join the New
              </AnimateInView>
              <AnimateInView animation="SlideRight">
                <Text as="span" color={["black", "black", "black", "white"]}>
                  Art
                </Text>{" "}
                <Text as="i" color="#E20A37">
                  Economy
                </Text>
              </AnimateInView>
            </Heading>
          </Box>
          <Box
            as={Col}
            xs={12}
            md={6}
            mt={[5, 10, 10, 20]}
            ml={['auto', 'auto', 'auto', 'auto']}
            mr={['auto', 'auto', 'auto', 0]}
            h={["fit-content", "initial", "md", "md"]}
            display={"flex"}
            justifyContent="flex-end"
            alignItems="flex-end"
            maxWidth="360px"
          >
            <AnimateInView delay={0.5}>
              <Box alignSelf={"flex-end"}>
                <Heading
                  as="h2"
                  fontSize={["xl", "2xl"]}
                  fontWeight="semibold"
                  mb={[5, 3]}
                  maxW="md"
                  textAlign={["center", "left"]}
                  mt={[5, 0]}
                >
                  Trade, Invest And Earn From African Artworks and Music.
                </Heading>
                <Text
                  color="#6B6968"
                  fontSize={"sm"}
                  textAlign={["center", "justify"]}
                >
                  ARTSPLIT is an art technology platform that enables you to own
                  and earn from fractions of valuable African artworks and music, all with
                  the common goal of raising the global profile of African artists and art.
                </Text>
                <Divider my={5} />
                <Box>
                  <Text
                    fontFamily="heading"
                    fontSize={["sm", "md"]}
                    fontWeight="bold"
                    textAlign={["center", "left"]}
                    mb={3}
                  >
                    Get Started!
                  </Text>
                  <Box
                    // as={Row}
                    // gap={5}
                    display={"flex"}
                    justifyContent={["center", "left"]}
                  >
                    {/* <Col xs={4}> */}
                    <a
                      href="https://apps.apple.com/ng/app/artsplit/id1591490402"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundImage: "url(/appstore-black.svg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: 60,
                        width: 160,
                        display: "flex",
                        marginLeft: -8,
                      }}
                    ></a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.artsplit.app&hl=en&gl=NG"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundImage: "url(/playstore-black.svg)",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: 60,
                        width: 160,
                        display: "flex",
                      }}
                    ></a>
                  </Box>
                </Box>
              </Box>
            </AnimateInView>
          </Box>
        </Box>
    )
}

export default Hero