import * as React from 'react';
import NextLink from 'next/link';
import {
    Box, Button, Heading, Image, Text, Link, Flex
} from '@chakra-ui/react';
import { Row, Col } from 'react-bootstrap';


const Artistes: React.FC = () => {
    return (
        <Box as="section" bgColor="#FBF7F3" position="relative" overflow="hidden" mb={[24, 24, 0]}>
            <Flex
                className="page-container"
                alignItems="center"
                minH={['auto', 'auto', 'auto', 'auto', 720]}
            >
                <Box
                    position="relative"
                    w={['100%', '100%', '100%', '100%', '41.66666667%', '41.66666667%']}
                    py={[16, 16, 16, 16, 24]}
                    _after={{
                        content: '" "',
                        position: 'absolute',
                        left: '95%',
                        top: 0,
                        bottom: 0,
                        width: 40,
                        height: '100%',
                        zIndex: 20,
                        background: '#FBF7F3',
                        transformOrigin: 'left bottom',
                        transform: 'skewX(-7deg)'
                    }}
                >
                    <Text mb={2} fontWeight={500} fontSize="lg">
                        Our Artistes
                    </Text>

                    <Heading fontSize={['2xl', '2xl', '3xl', '4xl']} color="primary">
                        Creators
                    </Heading>

                    <Heading
                        className="primary-gradient-text"
                        fontSize={['5xl', '5xl', '6xl']}
                        textTransform="uppercase"
                        my={4}
                    >
                        { 'King Perryy' }
                    </Heading>

                    <Text fontSize={['sm', 'md', 'md', 'lg']} lineHeight={[1.8, 2]} color="gray.800">
                        With Nigerian music gaining precedence worldwide, King Perryy stands out as one of the country's
                        most distinctive and ambitious young acts. The creator of what he calls the “Continental Sound,”
                        the former seminary student and would-be Catholic priest fuses the melodies and rhythms of
                        today's Afrobeats with pan-African influences and reggae/dancehall to create deeply resonant
                        songs that transcend cultures and borders...
                    </Text>

                    <Box mt={[8, 8, 12]}>
                        <NextLink href="/musicsplit/learn" passHref>
                            <Button as={Link} size="lg">
                                Learn more
                            </Button>
                        </NextLink>
                    </Box>
                </Box>
            </Flex>
            
            <Box
                position={['relative', 'relative', 'relative', 'relative', 'absolute']}
                left={[0, 0, 0, 0, 'unset']}
                right={0}
                top={0}
                bottom={0}
                backgroundImage="url('/king-perryy.jpg')"
                backgroundRepeat="no-repeat"
                backgroundSize={['contain', 'contain', 'contain', 'contain', 'cover']}
                backgroundPosition="top"
                minW={[320, 320, 320, 640, '50%']}
                minH={[320, 320, 320, 640, '50%']}
                h="full"
            ></Box>
        </Box>
    )
}

export default Artistes;