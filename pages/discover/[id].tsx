import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Box,
  Avatar,
  Heading,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  SimpleGrid,
  Image
} from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import CMSService, { CMSArtist } from "services/CMS.service";
import { ResponseDataModel } from "services/API.service";
import Seo from "components/Seo";

const Artist: NextPage = () => {
  const Router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const [artist, setArtist] = useState<ResponseDataModel<CMSArtist>>()

  useEffect(() => {
    if (Router.query.id) {
      CMSService.getArtist(Router.query.id as string).then(({ data }) => {
        setArtist(data)
        setLoaded(true)
      })
    }
  }, [Router.query.id])

  return (
    <div>
      <Seo
        title={`Discover ${artist?.attributes.artist_name ?? 'Artist'}`}
        description={artist?.attributes.excerpt ?? ''}
      />

      <Header />

      <main>
        <Skeleton isLoaded={loaded}>
          <Box
            height={[280, 280, 360, 420]}
            backgroundColor="gray.100"
            backgroundImage={artist?.attributes.thumbnail_image?.data.attributes.url}
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position={"relative"}
          ></Box>
        </Skeleton>

        <SkeletonCircle
          isLoaded={loaded}
          w={[160, 160, 160, 240]}
          h={[160, 160, 160, 240]}
          mt={['-55px', '-55px', '-55px', "-100px"]}
          mx="auto"
          border="2px solid #FFFFFF"
        >
          <Avatar
            name={artist?.attributes.artist_name ?? 'No name'}
            src={artist?.attributes.artist_photo?.data.attributes.url}
            w={[160, 160, 160, 240]}
            h={[160, 160, 160, 240]}
            borderRadius={"full"}
            p="1.5"
            bg="white"
            mx="auto"
            mt="-20px"
          />
        </SkeletonCircle>

        <Box 
          mt={[6, 6, 6, 10]}
          mb={['150px', '150px', '150px', 0]}
          className="page-container"
        >
          <Skeleton
            isLoaded={loaded}
            height="32px"
            mx="auto"
            mb={[6, 6, 6, 16]}
            borderRadius="2xl"
          >
            <Heading
              textAlign={"center"}
              fontSize={['3xl', '3xl', '4xl', '5xl']}
              fontWeight={500}
              mb={[5, 5, 5, 10]}
            >
              { artist?.attributes.artist_name ?? 'Artist Not Found' }
            </Heading>
          </Skeleton>

          <Box fontSize={['md', 'md', 'md', 'lg']} textAlign="justify">
            {
              loaded
              ? (
                <div className="ArtistBiography" dangerouslySetInnerHTML={{
                  __html: artist?.attributes.biography ?? '<p>Artist profile was not found</p>'
                }}></div>
              )
              : <SkeletonText noOfLines={8} />
            }
          </Box>

          <SimpleGrid columns={[1, 1, 2, 3, 5]} columnGap={8} rowGap={8} mt={16}>
            {
              loaded
              ? (
                artist?.attributes.artworks?.data?.map((artwork) => (
                  <Box
                    key={`artwork-#${artwork.id}`}
                    width="full"
                    height="240px"
                    backgroundImage={artwork.attributes.url}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    rounded="3xl"
                  ></Box>
                ))
              )
              : (
                new Array(5).fill('skeleton').map((sk, i) => (
                  <Skeleton
                    key={`artwork-skeleton-${i}`}
                    w="full"
                    h="240px"
                    rounded="3xl"
                  />
                ))
              )
            }
          </SimpleGrid>
        </Box>
      </main>

      <Footer />
    </div>
  );
};

export default Artist;
