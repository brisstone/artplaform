
import React, { Fragment, useCallback, useMemo, useState } from "react";
import {
  Image,
  Flex,
  Box,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { IoIosMenu } from "react-icons/io";
import useAppDownloader from "hooks/useAppDownloader";
import Clearfix from "./Clearfix";
import { MixpanelTracking } from "services/Mixpanel";

const Header: React.FC<{ clear?: boolean }> = ({ clear = true }) => {
  const Router = useRouter();
  const { download } = useAppDownloader()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ shouldElevate, setShouldElevate ] = useState(false)
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const getTheApp = () => {
    // @ts-ignore
    window.gtag?.('event', 'conversion', {
      'send_to': 'AW-11110459513/is-LCPm9iZMYEPnQ8LEp'
    });
    download()
  }

  const links = useMemo(() => [
    {
      href: "/",
      title: "Home",
      active: Router.route == "/",
    },
    {
      href: "/explore/auction",
      title: "Explore",
      active: Router.route.includes("explore"),
    },
    {
      href: "/company",
      title: "Company",
      active: Router.route.includes("company"),
    },
    {
      href: "/musicsplit",
      title: "MusicSplit",
      active: Router.route.includes("musicsplit"),
    },
    {
      href: "/discover",
      title: "Discover",
      active:
        Router.route.includes("discover") ||
        Router.route.includes("editorials") ||
        Router.route.includes("monthly-auctions-dec-2022"),
      dropdown: [
        {
          title: 'Artists',
          href: '/discover',
          active: Router.route.startsWith('/discover')
        },
        {
          title: 'Editorials',
          href: '/editorials',
          active: Router.route.startsWith('/editorials')
        },
        {
          title: 'Live Auctions',
          href: '/monthly-auctions-apr-2023',
          active: Router.route.startsWith('/monthly-auctions-mar-2023')
        }
      ],
    },
    {
      href: "/contact",
      title: "Contact",
      active: Router.route.includes("contact"),
    },
  ], [Router.route]);

  const getLinkColor = useCallback((active: boolean) => (
    active ? '#000000' : 'rgba(107, 105, 104, 1)'
  ), [])

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setShouldElevate(window.scrollY > 50)
    })
  }, [])

  return (
    <>
      <Box
        as="header" className="header"
        position="fixed"
        top={0} left={0} right={0}
        zIndex={1000}
        bg={shouldElevate ? 'white' : 'transparent'}
        shadow={shouldElevate ? 'md' : 'none'}
      >
        <Flex
          justify={"space-between"}
          align="center"
          py={[1, 2]}
          className="page-container"
        >
          <Link as={NextLink} href="/" passHref>
            <Image src="/bottom-logo.png" width="150px" height="60px" />
          </Link>

          <Box as="nav" display={["none", "none", "none", "block"]}>
            <Flex gap="6">
              {links.map((item) => (
                <Box key={item.title} sx={{ position: "relative" }}>
                  {item.active && (
                    <Image
                      src="/header-select.png"
                      position="absolute"
                      left={0}
                      zIndex={-1}
                      mt={-1}
                      width={96}
                      height={42}
                      alt=""
                    />
                  )}

                  {item.dropdown?.length ? (
                    <Menu isOpen={isOpen2}>
                      <MenuButton
                        as={Link}
                        px={3}
                        onMouseEnter={onOpen2}
                        onMouseLeave={onClose2}
                        color={getLinkColor(item.active)}
                        fontSize="sm"
                        fontWeight={item.active ? 500 : 400}
                      >
                        { item.title }
                      </MenuButton>
                      <MenuList onMouseEnter={onOpen2} onMouseLeave={onClose2}>
                        {
                          item.dropdown.map((subItem) => (
                            <MenuItem key={`submenu-${subItem.title}`} minH="42px">
                              <Link
                                as={NextLink}
                                href={subItem.href}
                                fontSize="sm"
                                color={subItem.active ? 'black' : 'rgba(107, 105, 104, 1)'}
                                fontWeight={subItem.active ? 500 : 400}
                                referrerPolicy="no-referrer"
                                passHref
                              >
                                { subItem.title }
                              </Link>
                            </MenuItem>
                          ))
                        }
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      as={NextLink}
                      href={item.href}
                      passHref
                      color={getLinkColor(item.active)}
                      fontSize="sm"
                      fontWeight={item.active ? 500 : 400}
                      height={5}
                      px={3}
                      referrerPolicy="no-referrer"
                    >
                      {item.title}
                    </Link>
                  )}
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex gap={5} display={["none", "none", "none", "flex"]}>
            <Button onClick={getTheApp}>
              Get the App
            </Button>
          </Flex>

          <IconButton
            variant="ghost"
            icon={<IoIosMenu fontSize={32} />}
            onClick={onOpen}
            aria-label="menu"
            display={["inherit", "inherit", "inherit", "none"]}
            isRound
          />

          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton mt={2} />
              <DrawerHeader>
                <NextLink href="/">
                  <Image src="/bottom-logo.png" alt="logo" width={150} />
                </NextLink>
              </DrawerHeader>

              <DrawerBody>
                {
                  links.map((link) => (
                    link.dropdown?.length ? (
                      <Accordion key={link.href} defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                          <h2>
                            <AccordionButton pl={0}>
                              <Box flex="1" textAlign="left" py={3} fontWeight={500}>
                                { link.title }
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} pl={0}>
                            {
                              link.dropdown.map((subLinks) => (
                                <Box key={subLinks.href} py={3} ml={3}>
                                  <NextLink href={subLinks.href}>
                                    { subLinks.title }
                                  </NextLink>
                                </Box>
                              ))
                            }
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Fragment key={link.href}>
                        <Box py={4} fontWeight={500}>
                          <NextLink href={link.href}>
                            { link.title }
                          </NextLink>
                        </Box>
                        <Divider />
                      </Fragment>
                    )
                  ))
                }

                <Box mt={10}>
                  <Button onClick={download} width="full" size="lg">
                    Get the App
                  </Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>

      { clear && <Clearfix /> }
    </>
  );
};
export default Header;
