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
import { Row, Col } from "react-bootstrap";
import Footer from "components/Footer";
import Header from "components/Header";
import PageHeader from "components/PageHeader";
import CMSService, { CMSArtist } from "services/CMS.service";
import { ResponseDataModel } from "services/API.service";
import Seo from "components/Seo";
import FeaturedArtist from "components/FeaturedArtist";

type ArtistWithArtwork = {
  about: string;
  artist_id: string;
  artist_name: string;
  images: string[];
  _id: string;
};
type Data = {
  items: {
    type: "profile_link" | "image";
    data: string;
  }[];
  artist_name: string;
  artist_id: string;
  about: string;
  _id: string;
};
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
          <Text>Discover some of Africa's most proficient artists.</Text>
        </Box>
      </PageHeader>

      <main className="page-container">
        <Box mb={48}>
          {
            loaded ? (
              artists.filter((artist) => artist.attributes.artworks?.data?.length)
              .map((artist, index) => (
                <FeaturedArtist key={`artist-${artist.id}`} artist={artist} reversed={index % 2 === 1} />
              ))
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
