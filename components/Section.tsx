import React from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'

export interface SectionProps {
    preTitle: string;
    title: string;
    children: React.ReactNode | Array<React.ReactNode>;
    viewMore?: boolean;
    href?: string;
    isExternal?: boolean;
}

const Section: React.FC<SectionProps> = ({
    preTitle,
    title,
    children,
    viewMore = true,
    href,
    isExternal
}) => {
    return (
        <Box as="section" className="page-container" my={[12, 12, 24, 32]}>
            <Flex alignItems="center" justifyContent="space-between" mb={6}>
                <Stack mb={[4, 8]}>
                    <Text fontSize={['md', 'md', 'lg']} textTransform="uppercase" color="primary">
                        { preTitle }
                    </Text>
                    <Heading fontSize={['3xl', '3xl', '5xl', '5xl']} fontWeight={500}>
                        { title }
                    </Heading>
                </Stack>

                {
                    viewMore && href ? (
                        <NextLink href={href} passHref>
                            <Link
                                display={['none', 'none', 'block']}
                                textDecor="underline"
                                color="primary"
                                isExternal={isExternal}
                            >
                                View more
                            </Link>
                        </NextLink>

                    ) : <></>
                }
            </Flex>

            <Box mb={8}>
                { children }
            </Box>

            {
                viewMore && href ? (
                    <NextLink href={href} passHref>
                        <Link
                            display={['block', 'block', 'none']}
                            textDecor="underline"
                            color="primary"
                            isExternal={isExternal}
                        >
                            View more
                        </Link>
                    </NextLink>

                ) : <></>
            }
        </Box>
    )
}

export default Section