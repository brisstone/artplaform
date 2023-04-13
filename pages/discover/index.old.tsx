/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import React, { useState, useEffect, useCallback } from "react";
import { Carousel } from "react-bootstrap";
import {
  Box,
  Avatar,
  Text,
  Heading,
  Flex,
  Link,
  SimpleGrid,
  Skeleton
} from "@chakra-ui/react";
import NextLink from "next/link";
import Footer from "components/Footer";
import Header from "components/Header";
import PageHeader from "components/PageHeader";
import CMSService, { CMSArtist } from "services/CMS.service";
import { ResponseDataModel } from "services/API.service";
import Seo from "components/Seo";

const Discover: NextPage = () => {
  const [loaded, setLoaded] = useState(false)
  const [artists, setArtists] = useState<Array<ResponseDataModel<CMSArtist>>>([])
  let position = 0
  let ascending = true
  let itemsInRow = [1, 2, 3, 4, 5]

  const getArtworks = useCallback((artist: CMSArtist) => artist.artworks?.data, [])

  useEffect(() => {
    CMSService.getArtistsWithArtworks().then(({ data }) => {
      setArtists(data ?? [])
      setLoaded(true)
    })
  }, [])

  return (
    <div>
      <Seo
        title="Discover some of Africa’s most proficient artists"
        description="Discover some of Africa’s most proficient artists"
      />

      <Header />

      <PageHeader title={
        <Text>
          Browse all our<br />featured artists
        </Text>
      }>
        <Box textAlign={['left', 'left', 'left']}>
          <Text>Discover some of Africa’s most proficient artists.</Text>
        </Box>
      </PageHeader>

      <main>
        <Box mb={48}>
          {
            loaded ? (
              artists.map((artist) => {
                if (position === itemsInRow.length) ascending = false
                else if (position === 1) ascending = true
                position += (ascending ? 1 : -1)
  
                return (
                  <SimpleGrid
                    key={`artist-${artist.id}`}
                    columns={[1, 1, 1, itemsInRow.length]}
                    spacing={8}
                    px={8}
                    mb={[16, 16, 16, 8]}
                    alignItems="center"
                  >
                    <Flex order={[-1, -1, -1, position]}
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      maxW={['100%', '100%', '100%', 280]}
                      margin={[0, 0, 0, 'auto']}
                    >
                      <Heading fontWeight={500} mb={[1, 1, 3, 5]}>
                        { artist.attributes.artist_name }
                      </Heading>
                      <NextLink href={`/discover/${artist.id}`} passHref>
                        <Link>
                          <Text textDecoration="underline" color="#3C3C3C" textUnderlineOffset={4}>
                            Artist Profile
                          </Text>
                        </Link>
                      </NextLink>
                    </Flex>
  
                    {
                      /**
                       * Filter out the order position that's already
                       * been occupied by the Artist's name.
                       * 
                       * i.e. if position 2 has been occupied by the Artist's name,
                       * we have only 1, 3, 4, ... to occupy.
                       */
                      itemsInRow.filter((num) => num !== position).map(
                        (pos, index) => (
                          <Box
                            key={`works-of-artist-${artist.id}-${index}`}
                            order={[1, 1, 1, pos]}
                            display={['none', 'none', 'none', 'initial']}
                            width="100%"
                            height="276px"
                            border="1px solid #F0F0F0"
                            backgroundImage={
                              getArtworks(artist.attributes)?.[index]
                              ? getArtworks(artist.attributes)?.[index].attributes.url
                              : "url(/placeholder-image.png)"
                            }
                            backgroundSize="cover"
                            backgroundPosition="center"
                            borderRadius="3xl"
                          ></Box>
                        )
                      )
                    }
  
                    {/* Mobile view for artist's work */}
                    {
                      getArtworks(artist.attributes) && (
                        <Box display={['initial', 'initial', 'initial', 'none']}>
                          <Carousel indicators={false}>
                            {
                              getArtworks(artist.attributes)?.map((artwork) => (
                                <Carousel.Item key={`artist-work-carousel-${artwork.id}`}>
                                  <Box
                                    backgroundImage={
                                      artwork.attributes.url
                                      ?? "url(/placeholder-image.png)"
                                    }
                                    backgroundSize="cover"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    h={"xs"}
                                    className="mx-auto"
                                    borderRadius="3xl"
                                    border="1px solid #EAEAEA"
                                  ></Box>
                                </Carousel.Item>
                              ))
                            }
                          </Carousel>
                        </Box>
                      )
                    }
                  </SimpleGrid>
                )
              })
            ) : (
              <SimpleGrid columns={[1, 1, 2, itemsInRow.length]} spacing={8} px={8}>
                {
                  new Array(itemsInRow.length).fill(1).map((_, i) => (
                    <Skeleton key={`skeleton-${i}`} h={"xs"} borderRadius="3xl" />
                  ))
                }
              </SimpleGrid>
            )
          }
        </Box>
      </main>

      <Footer />
    </div>
  );
};

export default Discover;
