import * as React from 'react';
import { Box, Text, Heading, Link, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';
import NextLink from 'next/link'
import { formatDate } from 'utils/formatters';
import { EditorialPost } from 'services/CMS.service';
import { ResponseDataModel } from 'services/API.service';

export interface PostProps {
    post: ResponseDataModel<EditorialPost>;
    stacked?: boolean;
    loading?: boolean;
}

const Post: React.FC<PostProps> = ({ post, stacked = false, loading = false }) => {
    const url = React.useMemo(() => (
        `/editorials?post=${post.attributes?.slug}`
    ), [post])

    return (
        <Flex
            flexDirection={stacked ? 'column' : ['column', 'column', 'row']}
            justifyContent="flex-start"
            alignItems={stacked ? 'flex-start' : 'center'}
            width="full"
        >
            <Skeleton
                isLoaded={!loading || !!post.attributes}
                borderRadius="3xl"
                width={stacked ? 'full' : ['full', 'full', '50%']}
                height={stacked ? '200px' : '180'}
                mb={stacked ? 3 : [3, 3, 0]}
                mr={stacked ? 0 : [0, 0, 6]}
            >
                <NextLink href={url} passHref>
                    <Link>
                        <Box
                            width="100%"
                            height={stacked ? '200px' : 180}
                            backgroundColor="#EEEEEE"
                            backgroundImage={
                                post.attributes?.featured_image?.data?.attributes.url
                                ?? "url('/placeholder-image.png')"
                            }
                            backgroundSize="cover"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            borderRadius={"3xl"}
                        ></Box>
                    </Link>
                </NextLink>
            </Skeleton>

            <Box width={stacked ? 'full' : ['full', 'full', '50%']}>
                <SkeletonText isLoaded={!loading || !!post.attributes} width="full">
                    <Text
                        textTransform={"uppercase"}
                        mb={1} mt={stacked ? 3 : 0}
                        color="#6B6968"
                        fontWeight={400}
                        fontSize="sm"
                    >
                        { formatDate(
                            post.attributes?.date ??
                            post.attributes?.createdAt
                        ) }
                    </Text>

                    {
                        stacked ? (
                            <NextLink href={url} passHref>
                                <Heading as={Link} display="block" fontSize="xl" fontWeight={500} mb={3}>
                                    { post.attributes?.title }
                                </Heading>
                            </NextLink>
                        ) : (
                            <NextLink href={url} passHref>
                                <Link 
                                    fontSize="xl"
                                    fontWeight={500}
                                    mb={3}
                                    lineHeight="normal"
                                    fontFamily="heading"
                                >
                                    { post.attributes?.title }
                                </Link>
                            </NextLink>
                        )
                    }

                    {
                        stacked && (
                            <Text
                                display={['none', 'none', 'initial', 'initial']}
                                color="#6B6968"
                                fontSize="sm"
                            >
                                { post.attributes?.excerpt }
                                { !post.attributes?.excerpt?.endsWith('.') && '.'}
                                ..(
                                    <NextLink href={`/editorials?post=${post.attributes?.slug}`} passHref>
                                        <Link color="orange.500">
                                            read more
                                        </Link>
                                    </NextLink>
                                )
                            </Text>
                        )
                    }
                </SkeletonText>
            </Box>
        </Flex>
    )
}

export default Post