import React from 'react';
import {
    Box,
    Heading,
    SimpleGrid,
    Image,
    Link,
    Button,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    Text,
    Flex
} from '@chakra-ui/react';

const ArtSplitBasics: React.FC = () => {
    return (
        <Box mt={[12, 0]} mb={[36, 28]}>
            <Box className="page-container">
                <SimpleGrid columns={[1, 1, 1, 2]}>
                    <Flex justifyContent={['flex-start', 'center']} alignItems="center">
                        <Heading
                            fontSize={["3xl", "5xl"]}
                            fontWeight={500}
                            mb={[10, 20]}
                            textAlign="left"
                        >
                            ARTSPLIT makes<br />investing simple.
                        </Heading>
                    </Flex>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 1, 2]} spacing={[4, 4, 4, 16]}>
                    <Flex flexDirection="column" justifyContent="center" alignItems="flex-end">
                        <Image src="/phone-group.png" alt="" maxH={['auto', '560px']} />
                    </Flex>

                    <Box id="investing" py={[8, 20]}>
                        <Box maxWidth={['100%', '520px']} margin={['auto', 'auto', 'auto', '0']}>
                            <Tabs variant="soft-rounded" mb={10} isFitted>
                                <TabList borderWidth={1} borderRadius={"full"} mb={[3, 6]}>
                                    <Tab px={[1, 4]} fontSize={['xs', 'sm']} fontWeight={500} py={3}>
                                        Split<br/>Contract
                                    </Tab>
                                    <Tab px={[1, 4]} fontSize={['xs', 'sm']} fontWeight={500} py={3}>
                                        Lease<br/>Contract
                                    </Tab>
                                    <Tab px={[1, 4]} fontSize={['xs', 'sm']} fontWeight={500} py={3}>
                                        Open<br/>Market
                                    </Tab>
                                    <Tab px={[1, 4]} fontSize={['xs', 'sm']} fontWeight={500} py={3}>
                                        Secondary<br/>Market
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <Text lineHeight={8} fontSize={['sm', 'md']}>
                                            The app lists evaluated artworks and music in fractions of 100,000 splits,
                                            allowing for co-ownership. On the secondary market, splits can be resold.
                                            The minimum number of splits that can be listed is 10,000.
                                        </Text>
                                    </TabPanel>

                                    <TabPanel>
                                        <Text lineHeight={8} fontSize={['sm', 'md']}>
                                            Because split contracts allow multiple users to co-own a piece of art,
                                            the question of who gets physical custody of the artwork arises.
                                            As a result, the Lease contract provides users with the opportunity to win
                                            physical custody of an artwork, which they can either
                                            keep or resell in the secondary market.​
                                        </Text>
                                    </TabPanel>

                                    <TabPanel>
                                        <Text lineHeight={8} fontSize={['sm', 'md']}>
                                            Looking for art? The place to be is the Open Market! Purchase art
                                            from your favourite artists in real-time through the app.
                                        </Text>
                                    </TabPanel>

                                    <TabPanel>
                                        <Text lineHeight={8} fontSize={['sm', 'md']}>
                                            There's no need to be concerned about missing Splits in the primary auction.
                                            You can buy and sell splits from other users in the
                                            Secondary Market, and see your portfolio grow.
                                        </Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>

                            <Button
                                size="lg"
                                as={Link}
                                href="https://www.youtube.com/watch?v=duCEq6yhPyE"
                                target="_blank"
                                width={['full', 'full', 'auto']}
                                isExternal
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default ArtSplitBasics