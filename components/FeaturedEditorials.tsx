import * as React from 'react';
import NextLink from 'next/link';
import {
    SimpleGrid,
    Box,
    Stack,
    Skeleton,
    Image,
    Heading,
    Text,
    Link
} from '@chakra-ui/react';
import useApi from 'hooks/useApi';
import { ResponseDataModel } from 'services/API.service';
import CMSService, { EditorialPost } from 'services/CMS.service';
import Section from './Section';
import Post from './Post';
import { formatDate } from 'utils/formatters';

const FeaturedEditorials: React.FC = ({}) => {
    const { isLoaded, data: editorials = [] } = useApi<any[]>(CMSService.getAllEditorialPosts)
    const emptyPost = {} as ResponseDataModel<EditorialPost>
    const post = React.useMemo(() => editorials?.[0]?.attributes, [editorials])
    const getPostUrl = React.useCallback(
        (post: EditorialPost) => `/editorials?post=${post?.slug}`, []
    )

    return post ? (
        <Section preTitle="ARTSPLIT LIVE" title="Featured Editorials" href="/editorials">
            {
                isLoaded
                ? (
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={12}>
                        <Stack>
                            <Box mb={2}>
                                {
                                    post?.featured_image?.data && (
                                        <NextLink href={getPostUrl(post)} passHref>
                                            <Link>
                                                <Box
                                                    borderWidth={1}
                                                    backgroundImage={`url(${post?.featured_image.data.attributes.url})`}
                                                    w="full"
                                                    h={["xs", "xs", "xs", "sm"]}
                                                    borderRadius="3xl"
                                                    backgroundSize="cover"
                                                    backgroundPosition="top"
                                                >
                                                </Box>
                                            </Link>
                                        </NextLink>
                                    )
                                }    
                            </Box>

                            <Text textTransform={"uppercase"}>
                                { formatDate(post?.createdAt) }
                            </Text>
                            
                            <NextLink href={getPostUrl(post)} passHref>
                                <Link>
                                    <Heading
                                        fontSize={['2xl', '2xl', '2xl', '3xl']}
                                        mb={4}
                                        fontWeight={500}
                                    >
                                        { post.title }
                                    </Heading>
                                </Link>
                            </NextLink>
                            
                            <Text fontSize={['md', 'lg']}>
                                { post.excerpt }{ !post.excerpt?.endsWith('.') && '.'}..
                                <NextLink href={getPostUrl(post)} passHref>
                                    <Link color="orange.500">
                                        read more
                                    </Link>
                                </NextLink>
                            </Text>
                        </Stack>

                        <Stack gap={6}>
                            {
                                editorials?.slice(1, 4).map((editorial) => (
                                    <Post
                                        key={`editorial-post-${editorial.id}`}
                                        post={editorial}
                                    />
                                ))
                            }
                        </Stack>
                    </SimpleGrid>
                ) : (
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={12}>
                        <Box>
                            <Skeleton
                                borderRadius="3xl"
                                h={["xs", "xs", "xs", "sm"]}
                            />
                        </Box>

                        <Stack gap={6}>
                            {
                                new Array(3).fill(10).map((_, i) => <Post key={`dummy-${i}`} post={emptyPost} />)
                            }
                        </Stack>
                    </SimpleGrid>
                )
            }
        </Section>
    ) : <></>
}

export default FeaturedEditorials