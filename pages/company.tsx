import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import {
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Box,
  Button,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaDotCircle,
} from "react-icons/fa";
import { Card, Col, Row, Carousel } from "react-bootstrap";
import { useState } from "react";
import Seo from "components/Seo";
import PageHeader from "components/PageHeader";

const BottomCard = ({ title, body }: { title: React.ReactNode; body: string }) => (
  <Box
    background="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(12px)"
    rounded="3xl"
    height="280px"
    px={[6, 10]}
    py={12}
  >
    <Heading fontSize={"xl"} color="white" fontWeight={400} mb={6} lineHeight={1.3}>
      { title }
    </Heading>

    <Text color="gray" fontSize={"sm"}>
      {body}
    </Text>
  </Box>
);

const Company: NextPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const cardItems = [
    {
      title: "Real Time Portfolio View",
      body: "You can upload your artwork and view your portfolios in real-time. You can also view the worth of each artwork or unit of an artwork.",
    },
    {
      title: "Secure Payments",
      body: "Fund your wallet easily and safely via bank transfer or credit/debit cards.",
    },
    {
      title: "Responsive Customer Support",
      body: "send an email to info@artsplit or call/Whatsapp our number on +2349088962169. You can also follow us on Twitter, Instagram and Facebook at @artsplitofficial.",
    },
  ];

  return (
    <div>
      <Seo title="Company" />

      <Header />

      <PageHeader title={
          <Text>
            Enhancing the Investment<br/>Status of African Art
          </Text>
        }>
          <Text>
            We believe in the value of African art and artists, as well as the power of markets.
          </Text>
        </PageHeader>

      <Box as="main">
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <Box
              height="360px"
              className="scroll-x-forever"
              backgroundImage="url('/contact-bg.png')"
              backgroundSize="cover"
              backgroundRepeat="repeat-x"
            ></Box>
          </Carousel.Item>
        </Carousel>

        <Box
          as="section"
          maxW="1080px"
          mx="auto"
          px={5}
          py={[10, 24]}
        >
          <Box as={Row} justifyContent="center" alignItems="center">
            <Box
              as={Col}
              md={6}
              mb={[4, 0]}
              mt={[8, 0]}
              order={[2, 2, 2, 1]}
            >
              <Image
                src="/woman-drawing.png"
                maxH={400}
                alt=""
                borderRadius="3xl"
              />
            </Box>

            <Box as={Col} md={6} order={[1, 1, 1, 2]}>
              <Stack gap={4} textAlign="justify">
                <Text>
                  With the explosion in the appreciation and value of African content and art in
                  the global market over the last decade. African art is undeniably the new liquid gold! 
                </Text>
                
                <Text>
                  As a result, we created a platform that elevates the investment status
                  of African art by enabling users to co-own rare and valuable artworks on
                  a platform that ensures price discovery and market liquidity.
                </Text>
                
                <Text>
                  By developing the African art ecosystem through technology and co-ownership,
                  we aim to position African art and artists as the preferred alternative investment choice.
                </Text>
                
                <Text>
                  We believe that by using alternative investments, we can make wealth accessible to everyone.
                </Text>
              </Stack>
            </Box>
          </Box>
          
          <Box as="div" className="mt-5 py-5">
            <Heading fontSize={['3xl', '5xl']} mb={6}>
              Investing is simple here
            </Heading>

            <Row>
              <Col md={7}>
                <Text>
                  ARTSPLIT is the easiest way to access smarter alternate
                  investment options and earn real returns. We make investing
                  secure, accessible and affordable.
                </Text>
              </Col>
            </Row>
          </Box>
        </Box>

        <Box
          as={Flex}
          justifyContent="center"
          alignItems="center"
          height="520px"
          backgroundImage={"url('/marketplace-bg.png')"}
          backgroundSize="cover"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
          mb={24}
        >
          <Box
            as={Carousel}
            className={styles.container}
            controls={false}
            fade
            display={["flex", "none"]}
            indicators={false}
            interval={null}
            activeIndex={index}
            // onSelect={(e) => setIndex(e)}
          >
            {cardItems.map((item, i) => (
              <Carousel.Item key={item.title}>
                <BottomCard title={item.title} body={item.body} />
                <Box
                  as={Col}
                  xs={12}
                  className="justify-content-center d-flex d-sm-flex d-lg-none"
                  mt={5}
                  gap={0}
                >
                  <IconButton
                    aria-label=""
                    variant={"ghost"}
                    size="xs"
                    icon={
                      <Icon
                        as={FaCircle}
                        color={i == 0 ? "#ff0000" : "#fff"}
                        onClick={() => setIndex(0)}
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
                        color={i == 1 ? "#ff0000" : "#fff"}
                        onClick={() => setIndex(1)}
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
                        color={i == 2 ? "#ff0000" : "#fff"}
                        onClick={() => setIndex(2)}
                      />
                    }
                  />
                </Box>
              </Carousel.Item>
            ))}
          </Box>

          <Box maxW="1020px" mx="auto">
            <Box
              as={Row}
              className="align-content-center"
              display={["none", "flex"]}
            >
              <Col md={4}>
                <BottomCard
                  title={<Text>Real-time<br/>Portfolio View</Text>}
                  body="You can upload your artwork and view your portfolios in
                      real-time. You can also view the worth of each artwork or
                      unit of an artwork."
                />
              </Col>

              <Col md={4}>
                <BottomCard
                  title={<Text>Secure<br/>Payments</Text>}
                  body="Fund your wallet easily and safely via bank transfer or
                      credit/debit cards."
                />
              </Col>

              <Col md={4}>
                <BottomCard
                  title={<Text>Responsive<br/>Customer Support</Text>}
                  body="send an email to info@artsplit or call/Whatsapp our number
                      on +2349088962169. You can also follow us on Twitter,
                      Instagram and Facebook at @artsplitofficial."
                />
              </Col>
            </Box>
          </Box>

        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Company;
