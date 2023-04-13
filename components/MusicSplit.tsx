import * as React from 'react';
import NextLink from 'next/link';
import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Link,
    HStack,
    Button
} from '@chakra-ui/react';
import { Col, Row } from 'react-bootstrap';
import useAppDownloader from 'hooks/useAppDownloader';

const MusicSplit: React.FC = () => {
    const { openApp } = useAppDownloader()

    return (
        <>
            <Box
                id="join"
                position="relative"
                bg="linear-gradient(285.8deg, #000000 79.58%, rgba(0, 0, 0, 0.86) 100%)"
                mb={[8, 8, 28]}
                py={[16, 20, 40, 36]}
                minH={[820, 820, 1020, 'auto']}
                overflow="hidden"
            >
                <Box
                    as={Flex} justifyContent={['flex-start', 'flex-start', 'center']}
                    position="absolute" left={0} right={0} top={0}
                >
                    <Heading
                        as={Flex}
                        flexDir={['column', 'column', 'column', 'column', 'row']}
                        fontSize={['20vw', '16.4vw']}
                        lineHeight={[0.7]}
                        gap={6}
                        opacity={0.2}
                        style={{
                            color: "transparent",
                            strokeWidth: 0.75,
                            WebkitTextStrokeWidth: 0.75,
                            WebkitTextStrokeColor: "#fff",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        <Text>MUSIC</Text>
                        <Text>SPLIT</Text>
                    </Heading>
                </Box>
                
                <Box position="absolute" right={0} bottom={0} zIndex={20}>
                    <Image src="/lady-on-headset.png" alt="MusicSplit" maxH={[420, 420, 680]} />
                </Box>

                <Box className="page-container" position="relative">
                    <Row>
                        <Col xs={12}>
                            <Heading fontSize={['42px', '5xl', '6xl', '7xl']} fontWeight={400} mb={6} color="#A6A6A6">
                                <Text fontWeight="bold" display="inline-block" color="white">AFROBEATS</Text> TO
                                <br />THE WORLD, <br />
                                <Text fontWeight="bold" display="inline-block" color="white">ROYALTIES</Text> IN
                                <br />YOUR <Text fontWeight="bold" display="inline-block" color="white">POCKET!</Text>
                            </Heading>

                            <Text color="#A6A6A6" fontSize={["sm", "lg"]}>
                                Invest in units of trending African music on the
                                <br />ARTSPLIT app and start earning monthly royalties.
                            </Text>

                            <HStack mt={12} gap={6} position="relative">
                                {/* <Image
                                    position="absolute"
                                    left={-3}
                                    top={-5}
                                    src="/highlighter-ring.png"
                                    alt="highlighter-ring"
                                    width={[40, 40, 44]}
                                /> */}
                                {/* <NextLink href="?join-waitlist" scroll={false} passHref>
                                    <Link
                                        position="relative"
                                        color="primary"
                                        fontFamily="heading"
                                        fontSize={['lg', 'lg', 'xl']}
                                        _hover={{
                                            color: 'primary !important'
                                        }}
                                    >
                                        Join the Waitlist
                                    </Link>
                                </NextLink> */}
                                <Button
                                    onClick={() => openApp()}
                                    size="lg"
                                    rounded="lg"
                                    fontFamily="heading"
                                    fontSize={['md', 'md', 'lg']}
                                    _hover={{
                                        bgColor: 'primary'
                                    }}
                                >
                                    Invest Now
                                </Button>
                                
                                <NextLink href="/musicsplit" passHref>
                                    <Button
                                        size="lg"
                                        rounded="lg"
                                        position="relative"
                                        color="white"
                                        fontFamily="heading"
                                        fontSize={['md', 'md', 'lg']}
                                        bgColor="rgba(255, 255, 255, 0.2)"
                                        border="1px solid white"
                                        _hover={{
                                            bgColor: 'rgba(255, 255, 255, 0.3)'
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </NextLink>
                            </HStack>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </>
    )
}

export default MusicSplit