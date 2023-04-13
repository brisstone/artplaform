import { Box, Flex, Image, Link, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

const GetTheAppSection: React.FC = () => {
    return (
        <Box
            bgGradient="linear(to-l, rgba(192, 113, 42, 1), rgba(77, 31, 18, 1))"
            mt={[16, 16, 16, 48]}
            mx={[ '1rem', 0 ]}
            borderRadius={[10, 0]}
        >
            <Box
                bgImage="/footer-bg.png"
                height={['auto', 'auto', 'auto', 480]}
                px={12}
                pb={[16, 16, 16, 0]}
            >
                <Flex
                    className="page-container"
                    height="100%"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <SimpleGrid
                        columns={[1, 1, 1, 2]}
                        spacing={[0, 0, 0, 10]}
                        width="100%"
                        height="100%"
                    >
                        <Box display={['flex', 'flex', 'flex', 'none']} mt={-16} mb={8}>
                            <Image src="/two-phones.png" alt="" />
                        </Box>
                        
                        <Flex
                            flexDirection="column"
                            alignItems={['center', 'center', 'center', 'flex-start']}
                            justifyContent="center"
                            fontSize={[28, 32, 56, 70]}
                            color="#FFFFFF"
                            fontWeight={700}
                            height="100%"
                        >
                            <Box mb={7} textAlign={['center', 'center', 'center', 'left']}>
                                <h1>Get the</h1>
                                <h1>ARTSPLIT APP</h1>
                            </Box>

                            <Flex justifyContent={['center', 'center', 'center', 'flex-start']} alignItems="center">
                                <Link
                                    href="https://apps.apple.com/ng/app/artsplit/id1591490402"
                                    mr={[2, 4]}
                                    target="_blank"
                                    rel="noreferrer"
                                    isExternal
                                >
                                    <Image src="/AppStore-white.png" height={['auto', '72px']} alt="" />
                                </Link>

                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.artsplit.app&hl=en&gl=NG"
                                    target="_blank"
                                    rel="noreferrer"
                                    isExternal
                                >
                                    <Image src="/PlayStore-white.png" height={['auto', '72px']} alt="" />
                                </Link>
                            </Flex>
                        </Flex>

                        <Box position="relative" height="100%" display={['none', 'none', 'none', 'block']}>
                            <Box
                                position="absolute"
                                left={0} bottom={0} right={0}
                            >
                                <Image src="/footer-phones.png" alt="" />
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Box>
        </Box>
    )
}

export default GetTheAppSection