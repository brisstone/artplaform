import React, { useState } from 'react';
import {
    Box, Flex, Heading, Spacer, Image, Button,
    Text, SimpleGrid, Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Carousel, CarouselItem } from 'react-bootstrap';
import useApi from 'hooks/useApi';
import CMSService, { CMSArtist } from 'services/CMS.service';
import { ResponseDataModel } from 'services/API.service';
import SliderNavigation from './SliderNavigation';
import useSliderNavigation from 'hooks/useSliderNavigation';

const DiscoverTrendingArtists: React.FC = () => {
    const { isLoaded, data: artists = [] } = useApi<Array<ResponseDataModel<CMSArtist>>>(
        CMSService.getTrendingArtists
    )
    const {
        currentIndex, previous, next
    } = useSliderNavigation(artists?.length ?? 0)
    
    return artists?.length ? (
        <Box as="section" py={[12, 44]} className="page-container">
            <Flex align={"center"} mb={[8, 20]}>
                <Heading
                    as="h2"
                    lineHeight={["", "60px"]}
                    fontSize={['3xl', '4xl', '5xl']}
                    fontWeight={500}
                >
                    Discover<br />Trending  Artists
                </Heading>
                <Spacer />

                <Image
                    src="/group.png"
                    alt=""
                    className="rotate-forever"
                    h={['16', '16', '20', '32']}
                />
            </Flex>

            <Carousel activeIndex={currentIndex} fade controls={false} indicators={false}>
                {
                    isLoaded
                    && (
                        artists?.map((artist) => (
                            <CarouselItem key={`trending-artist-${artist.id}`}>
                                <SimpleGrid columns={[1, 1, 1, 1, 2]} spacing={[4, 10, 10, 10, 28]}>
                                    <Flex
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        height="100%"
                                        order={[2, 2, 2, 2, 1]}
                                    >
                                        <Box
                                            as="article"
                                            fontSize={["sm", "md", "lg", "lg"]}
                                            textAlign="justify"
                                            lineHeight={1.8}
                                            dangerouslySetInnerHTML={{
                                                __html: artist.attributes.biography.slice(0, 400) + '...'
                                            }}
                                        />

                                        <Box mt={8}>
                                            <Heading
                                                fontSize={['xl', '2xl', '3xl']}
                                                fontWeight={500}
                                                lineHeight={1.5}
                                            >
                                                { artist.attributes.excerpt }”
                                            </Heading>
                                            
                                            <Text
                                                color="#CCCCCC"
                                                fontSize={["3xl", "4xl", "5xl", "5xl"]}
                                                fontWeight={700}
                                                mt={2}
                                            >
                                                { artist.attributes.artist_name }
                                            </Text>
                                        </Box>

                                        <Box mt={12}>
                                            <NextLink href="/discover" passHref>
                                                <Button as={Link} size="lg" width={['full', 'auto']}>
                                                    View All Artists
                                                </Button>
                                            </NextLink>
                                        </Box>
                                    </Flex>

                                    <Flex flexDirection="column" justifyContent="flex-end" order={[1, 1, 1, 1, 2]}>
                                        <Box
                                            width={['auto', 480]}
                                            height={480}
                                            bg="gray.100"
                                            ml="auto"
                                            mr={['auto', 'auto', 'auto', 'auto', 0]}
                                            rounded="3xl"
                                            overflow="hidden"
                                        >
                                            <Image
                                                src={artist.attributes.artist_photo?.data.attributes.url}
                                                alt={`picture-of-${artist.attributes.artist_name}`}
                                                w="full" h="full"
                                                objectFit="cover"
                                                objectPosition="top"
                                            />
                                        </Box>

                                        <Box mt={[4, 8]}>
                                            <SliderNavigation
                                                onPrevious={previous}
                                                onNext={next}
                                            >
                                                <Text>
                                                    { currentIndex + 1 } of { artists?.length ?? 0 }
                                                </Text>
                                            </SliderNavigation>
                                        </Box>
                                    </Flex>
                                </SimpleGrid>
                            </CarouselItem>
                        ))
                    )
                }
            </Carousel>
        </Box>
    ) : <></>
}

export default DiscoverTrendingArtists
