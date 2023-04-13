import {
  Box,
  Heading,
  Input,
  Text,
  Link,
  Textarea,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Row, Col, Carousel } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Seo from "components/Seo";

// import { Row, Col } from "antd";

const Contact: NextPage = () => {
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const send = () => {
    if (
      email &&
      firstName &&
      lastName &&
      phone &&
      state &&
      message &&
      address
    ) {
      setLoading(true);
      axios
        .post("/api/email", {
          email,
          firstName,
          lastName,
          phone,
          state,
          message,
          address,
        })
        .then(() => {
          setLoading(false);

          toast({
            title: `Thank you for reaching out. Your message has been received.`,
            position: "top",
            status: "success",
            isClosable: true,
          });
        })
        .catch((err) => {
          setLoading(false);
          toast({
            title: `Message not sent. Please try again`,
            position: "bottom",
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  return (
    <div>
      <div>
        <Seo title="Contact" />
        <Header />

        <main>
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

          <section className="page-container">
            <Box as={Row} py={20}>
              <Box as={Col} xs={12} md={4} mb={[10, 3]} px={[6, 6, 12]}>
                <Heading mb={2} fontWeight={500} fontSize={"3xl"} textAlign="center">
                  General
                </Heading>
                <Text textAlign="center">
                  For inquiries about ARTSPLIT, the products, and solutions we offer,
                  kindly get in touch through our live chat or email us at
                  {' '}
                  <Link href="mailto:info@artsplit.com" color="primary" isExternal>
                    info@artsplit.com
                  </Link>
                </Text>
              </Box>

              <Box as={Col} xs={12} sm={4} mb={[10, 3]} px={[6, 6, 12]}>
                <Heading mb={2} fontWeight={500} fontSize={"3xl"} textAlign="center">
                  Support
                </Heading>
                <Text textAlign="center">
                  Need support? Talk to our friendly customer representative via
                  live chat, email us at <Link href="mailto:support@artsplit.com" color="primary" isExternal>
                    support@artsplit.com
                  </Link> or call us on <Link href="tel:2349088962169" color="primary" isExternal>
                    09088962169
                  </Link>{" "}
                </Text>
              </Box>
              
              <Box as={Col} xs={12} sm={4} px={[6, 6, 12]}>
                <Heading mb={2} fontWeight={500} fontSize={"3xl"} textAlign="center">
                  Social
                </Heading>
                <Text textAlign="center">
                  Reach out to us on
                  { ' ' }
                  <Link href="https://www.facebook.com/artsplitglobal" color="primary" target="_blank" isExternal>
                    Facebook
                  </Link>
                  { ', ' }
                  <Link href="https://www.youtube.com/@artsplittv" color="primary" target="_blank" isExternal>
                    YouTube
                  </Link>
                  { ', ' }
                  <Link href="https://twitter.com/Artsplitglobal" color="primary" target="_blank" isExternal>
                    Twitter
                  </Link>
                  { ' and ' } 
                  <Link href="https://www.instagram.com/artsplitofficial/" color="primary" target="_blank" isExternal>
                    Instagram
                  </Link>
                  { ', ' }
                  <Link href="https://www.linkedin.com/company/artsplit/mycompany/" color="primary" target="_blank" isExternal>
                    LinkedIn
                  </Link>
                  { ' and ' }
                  <Link href="https://www.tiktok.com/@artsplit" color="primary" target="_blank" isExternal>
                    Tiktok
                  </Link>
                  <br />
                  <Link href="https://www.instagram.com/artsplitofficial/" color="primary" target="_blank" isExternal>
                    @artsplitofficial
                  </Link>
                </Text>
              </Box>
            </Box>

            <Box mt={"24"}>
              <form onSubmit={() => {}}>
                <Box as={Row} className="justify-content-center">
                  <Box
                    as={Col}
                    xs={12}
                    sm={10}
                    md={8}
                    xl={9}
                    paddingLeft={["", 0]}
                    mb={[1, 4]}
                  >
                    <Heading fontSize={['3xl', '3xl', '5xl']} mb={10}>
                      Got Feedback? <br /> Get in touch with us.
                    </Heading>
                    <Text>
                      Please complete the information below to provide us with
                      your feedback.{" "}
                    </Text>
                  </Box>

                  <Box
                    as={Col}
                    xs={12}
                    sm={10}
                    md={8}
                    xl={9}
                    rounded="3xl"
                    py={[5, 10]}
                    bg={["#FFFFFF", "#FAFAFA"]}
                    borderColor={["#FFFFFF", "#F3F3F1"]}
                    borderWidth={1}
                  >
                    <Box as={Row} mb={5} px={[0, 10]}>
                      <Box as={Col} xs={12} sm={6} md={6} mb={5}>
                        <Text fontWeight={"semibold"}>First Name</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter first name"
                          onChange={(e) => setFirstName(e?.target?.value)}
                        />
                      </Box>
                      <Box as={Col} xs={12} sm={6}>
                        <Text fontWeight={"semibold"}>Last Name</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter last name"
                          onChange={(e) => setLastName(e?.target?.value)}
                        />
                      </Box>
                    </Box>
                    <Box as={Row} mb={5} px={[0, 10]}>
                      <Box as={Col} xs={12} sm={6} md={6} mb={5}>
                        <Text fontWeight={"semibold"}>Mobile Number</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter phone number"
                          onChange={(e) => setPhone(e?.target?.value)}
                        />
                      </Box>
                      <Box as={Col} xs={12} sm={6} md={6}>
                        <Text fontWeight={"semibold"}>Email</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e?.target?.value)}
                        />
                      </Box>
                    </Box>
                    <Box as={Row} mb={5} px={[0, 10]}>
                      <Box as={Col} xs={12} sm={6} md={6} mb={5}>
                        <Text fontWeight={"semibold"}>Address</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter Address"
                          onChange={(e) => setAddress(e?.target?.value)}
                        />
                      </Box>
                      <Box as={Col} xs={12} sm={6} md={6}>
                        <Text fontWeight={"semibold"}>State</Text>
                        <Input
                          variant={"outline"}
                          bg="#fff"
                          placeholder="Enter State"
                          onChange={(e) => setState(e?.target?.value)}
                        />
                      </Box>
                    </Box>
                    <Box px={[0, 10]}>
                      <Text fontWeight={"semibold"}>Message</Text>
                      <Textarea
                        variant={"outline"}
                        rows={8}
                        bg="#fff"
                        placeholder="Enter message"
                        onChange={(e) => setMessage(e?.target?.value)}
                        // ml={3}
                      />
                      <Flex mt={[10, 10]} justify={["center", "flex-end"]}>
                        <Button
                          rounded={"full"}
                          color="#fff"
                          bg="primary"
                          type="submit"
                          w={["full", "initial"]}
                          px={4}
                          onClick={(e) => send()}
                          isLoading={loading}
                          isDisabled={loading}
                        >
                          Send Feedback
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </form>
            </Box>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
