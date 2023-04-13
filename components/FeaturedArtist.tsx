import * as React from 'react';
import {
    Box,
    Flex,
    Heading,
    Link,
    Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Row, Col, Carousel } from 'react-bootstrap';
import { ResponseDataModel } from 'services/API.service';
import { CMSArtist } from 'services/CMS.service';
import SliderNavigation from './SliderNavigation';
import useSliderNavigation from 'hooks/useSliderNavigation';

export interface FeaturedArtistProp {
    artist: ResponseDataModel<CMSArtist>;
    reversed?: boolean;
}

const FeaturedArtist: React.FC<FeaturedArtistProp> = ({ artist, reversed }) => {
    const {
        currentIndex,
        previous,
        next
    } = useSliderNavigation(artist?.attributes.artworks?.data.length ?? 0)

    return (
        <Box mb={[8, 8, 8, 24]}>
            <Box
                as={Row}
                rowGap={8}
                flexDirection={[
                    'column', 'column', 'column',
                    reversed ? 'row-reverse' : 'row'
                ]}
                justifyContent="center"
                alignItems="center"
            >
                <Box as={Col} xs={12} lg={6}
                    display="flex"
                    flexDirection="column"
                    alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
                >
                    <Box>
                        <Heading 
                        fontSize={['3xl', '3xl', '3xl', '5xl']}
                        fontWeight={500} mb={[1, 1, 3, 5]}
                        maxW={360}
                        >
                            { artist.attributes.artist_name }
                        </Heading>

                        <NextLink href={`/discover/${artist.id}`} passHref>
                            <Link>
                                <Text textDecoration="underline" color="primary" textUnderlineOffset={4}>
                                    Artist Profile
                                </Text>
                            </Link>
                        </NextLink>
                    </Box>
                </Box>

                <Box as={Col} xs={12} lg={6}>
                    <Carousel activeIndex={currentIndex} indicators={false} controls={false}>
                        {
                            artist.attributes.artworks?.data?.map((artwork) => (
                                <Carousel.Item key={`works-of-artist-${artist.id}-${artwork.id}`}>
                                    <Box
                                        height="480px"
                                        borderWidth={1}
                                        backgroundImage={artwork.attributes.url}
                                        backgroundSize="cover"
                                        borderRadius="3xl"
                                    ></Box>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Box>
            </Box>

            <Flex mt={2} justifyContent={reversed ? 'flex-start' : 'flex-end'}>
                <SliderNavigation onPrevious={previous} onNext={next} />
            </Flex>
        </Box>
    )
}

export default FeaturedArtist