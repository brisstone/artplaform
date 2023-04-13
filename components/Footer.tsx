import {
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import GetTheAppSection from "./GetTheAppSection";

export default function Footer() {
  const links = [
    { title: "About Artsplit", href: "/company" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "FAQ", href: "/faq" },
    { title: "User Manual", href: "/user-manual" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Support", href: "/contact" },
    { title: "Careers", href: "/careers" },
    { title: "Use Policy", href: "/use-policy" },
  ];
  const socialLinks = [
    { name: FaFacebook, title: "Facebook", link: "https://www.facebook.com/artsplitglobal" },
    { name: FaInstagram, title: "Instagram", link: "https://www.instagram.com/artsplitofficial/" },
    { name: FaLinkedinIn, title: "LinkedIn", link: "https://www.linkedin.com/company/artsplit/mycompany/" },
    { name: FaYoutube, title: "YouTube", link: "https://www.youtube.com/@artsplittv" },
    { name: FaTwitter, title: "Twitter", link: "https://twitter.com/Artsplitglobal" },
    { name: FaTiktok, title: "Tiktok", link: "https://www.tiktok.com/@artsplit" },
  ];
  return (
    <footer>
      <GetTheAppSection />

      <Box py={5} backgroundColor="#F5F5F5">
        <Box className="page-container">
          <Box as={Row} alignItems="flex-start" py={8}>
            <Box as={Col} xs={12} sm={12} md={3} mb={5} pl={0}>
              <Link as={NextLink} href="/" passHref>
                <Image src="/bottom-logo.png" width="150px" height="60px" />
              </Link>
            </Box>

            <Box as={Col} xs={12} sm={12} md={6}>
              <Box as={Row} justifyContent={["flex-start"]} display="flex">
                {
                  links.map((link) => (
                    <Box key={link.title} as={Col} xs={6} lg={4}>
                      <Link
                        as={NextLink}
                        href={link.href}
                        passHref
                        fontSize="sm"
                        fontWeight={500}
                        display="block"
                        mb={3}
                      >
                        { link.title }
                      </Link>
                    </Box>
                  ))
                }
              </Box>
            </Box>
            
            <Box
              as={Col}
              justifyContent={["center", "center", "center", "flex-start"]}
              mt={[4, 0]}
            >
              <Box>
                <Flex
                  className="social"
                  gap={[0, 0]}
                  justifyContent="space-between"
                  mb={3}
                  maxWidth="220px"
                  mx={['auto', 0]}
                >
                  {socialLinks.map((link) => (
                    <Link key={link.title} href={link.link} target="_blank" isExternal>
                      <Icon as={link.name} key={link.title} fontSize={22} />
                    </Link>
                  ))}
                </Flex>

                <Text
                  fontSize="xs"
                  fontWeight={400}
                  lineHeight={2}
                  textAlign={["center", "center", "center", "left"]}
                >
                  Copyright &copy; 2022 <br />
                  ARTSPLIT. All rights reserved.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
