import { useState, useEffect, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Footer from "components/Footer";
import Header from "components/Header";
import {
  Heading,
  Box,
  Text,
  Stack,
  Image,
  Skeleton,
  SkeletonText,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { Col, Row, Carousel } from "react-bootstrap";
import Post from "components/Post";
import CMSService, { EditorialPost } from "services/CMS.service";
import { formatDate } from "utils/formatters";
import { ResponseDataModel } from "services/API.service";
import Seo from "components/Seo";

function Editorial() {
  const Router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const [editorials, setEditorials] = useState<Array<ResponseDataModel<EditorialPost>>>([])
  const [spotlitPost, setSpotlitPost] = useState<EditorialPost>({} as EditorialPost)

  const slug = useMemo(() => Router.query.post, [Router.query.post])
  const readMode = useMemo(() => !!slug, [slug])
  const post = useMemo(() => {
    return readMode ? spotlitPost : editorials[0]?.attributes ?? {}
  }, [editorials, spotlitPost, readMode])

  const dummyPost = {} as ResponseDataModel<EditorialPost>

  const getPostUrl = useCallback((post: EditorialPost) => `?post=${post.slug}`, [])

  useEffect(() => {
    if (editorials.length === 0) {
      CMSService.getAllEditorialPosts().then(({ data }) => {
        setEditorials(data ?? [])
        if (!slug) {
          setSpotlitPost((data ?? [])[0]?.attributes)
        }
        setLoaded(true)
      })
    }
    if (slug) {
      setLoaded(false)
      CMSService.getPostBySlug(slug as string).then(({ data }) => {
        if (data?.length) {
          setSpotlitPost(data[0].attributes)
        } else {
          // If post was not found, redirect to editorials page.
          Router.replace('/editorials')
        }
        setLoaded(true)
      })
    }
  }, [ slug, editorials.length, Router ])

  return (
    <div>
      <Seo
        title="Editorials"
        description={
          readMode
          ? post?.excerpt
          : "Trends, strategies, ideas, opinions, short and long stories."
        }
      />

      <Header />

      <Box
        as="main"
        maxW="1140px"
        pt={['2rem', '2rem', '5rem']}
        pb="2rem"
        px="1.2rem"
        m="auto"
      >
        <Heading
          fontSize={['2xl', '3xl', '3xl', '5xl']}
          fontWeight={500}
          mb={[10, 10, 10, 16]}
        >
          Trends, strategies, ideas,
          opinions,<br className="" /> short and long stories.
        </Heading>

        <Box h={1} bg="black" mb={5}></Box>

        <Text fontWeight={500} fontSize={['md', 'lg', 'lg', '2xl']} mb={[6, 6, 6, 10]}>
          Featured Editorials
        </Text>

        <Box as={Row} mb={[10, 10, 10, 20]}>
          <Box as={Col} xs={12} md={readMode ? 12 : 6}>
            {
              !loaded && (
                <Skeleton
                  borderRadius="3xl"
                  h={["xs", "xs", "xs", readMode ? "full" : "sm"]}
                />
              )
            }

            <Box>
              {
                post.featured_image?.data && (
                  <NextLink href={getPostUrl(post)} passHref>
                    <Link>
                      <Image
                        src={post.featured_image.data.attributes.url}
                        alt={`featured-image-for-${post.title}`}
                        w="full"
                        h={["xs", "xs", "xs", readMode ? "full" : "sm"]}
                        borderRadius="3xl"
                        objectPosition={"left"}
                        objectFit={"cover"}
                      />
                    </Link>
                  </NextLink>
                )
              }
            </Box>
            
            <SkeletonText isLoaded={loaded} noOfLines={1} mt={8} mb={2}>
              <Text textTransform={"uppercase"}>
                { (post.date ?? post.createdAt) && formatDate(post.date ?? post.createdAt) }
              </Text>
            </SkeletonText>

            <Skeleton
              isLoaded={loaded}
              height={loaded ? 'auto' : '25px'}
              borderRadius="md"
              mb={4}
            >
              <NextLink href={getPostUrl(post)} passHref>
                <Heading
                  as={Link}
                  fontSize={readMode ? ['2xl', '2xl', '4xl'] : ['2xl', '2xl', '2xl', '3xl']}
                  mb={4}
                  fontWeight={readMode ? "bold" : 500}
                >
                  { post.title }
                </Heading>
              </NextLink>
            </Skeleton>

            <SkeletonText isLoaded={loaded} noOfLines={2}>
              {
                readMode ? (
                  <Box
                    id="editorial-post"
                    fontSize={['md', 'md', 'md', 'xl']}
                    mt={8}
                    textAlign="justify"
                  >
                    <article dangerouslySetInnerHTML={{
                      __html: post.content
                    }}></article>
                  </Box>
                ) : (
                  post.excerpt ? (
                    <Text>
                      { post.excerpt }{ !post.excerpt?.endsWith('.') && '.'}..
                      <NextLink href={`?post=${post.slug}`} passHref>
                        <Link color="orange.500">
                          read more
                        </Link>
                      </NextLink>
                    </Text>
                  ) : (
                    <Text color="gray.500">
                      There are no posts to show here.
                    </Text>
                  )
                )
              }
            </SkeletonText>
          </Box>

          <Box
            as={Col}
            xs={0}
            md={6}
            display={['none', 'none', readMode ? 'none' : 'initial']}
          >
            <Stack direction={"column"} rowGap={3} display="flex">
              {
                loaded ? (
                  editorials.slice(1, 4).map((post) => (
                    <Stack key={`side-post-${post.id}`} direction={["row"]} columnGap={2}>
                      <Post post={post} loading={!loaded} />
                    </Stack>
                  ))
                ) : (
                  <>
                    <Post loading post={dummyPost} />
                    <Post loading post={dummyPost} />
                    <Post loading post={dummyPost} />
                  </>
                )
              }
            </Stack>
          </Box>
        </Box>

        {/* Mobile view */}
        <Stack
          rowGap={5} py={10} mb={16}
          display={["initial", "none"]}
        >
          <Box
            as={Carousel}
            indicators={false}
            interval={null}
          >
            {
              editorials.slice(1, 4).map((post) => (
                <Carousel.Item key={`mobile-post-${post.id}`}>
                  <Post post={post} loading={!loaded} stacked />
                </Carousel.Item>
              ))
            }
          </Box>
        </Stack>

        <Box h={1} bg="black" mb={5}></Box>
        <Text fontWeight={500} fontSize={['md', 'lg', 'lg', '2xl']} mb={[6, 6, 6, 10]}>
          Featured Editorials
        </Text>

        <SimpleGrid columns={[1, 1, 2, 3]} rowGap={12} columnGap={8}>
          {
            editorials.slice(1).map((post) => 
              <Post
                key={`other-post-${post.id}`}
                post={post}
                loading={!loaded}
                stacked
              />
            )
          }
        </SimpleGrid>
      </Box>

      <Footer />
    </div>
  );
}

export default Editorial;
