import * as React from 'react';
import {
    Box
} from '@chakra-ui/react'
import { Carousel, CarouselItem } from 'react-bootstrap';

const ArtworkCarousel: React.FC<{
    artworks: Array<any>,
    children?: React.ReactNode
}> = ({ artworks, children }) => {
    return (
        <Carousel fade indicators={false} controls={artworks.length > 1}>
            {
                artworks.map((artwork) => (
                    <CarouselItem key={artwork?._id}>
                        <Box
                            position="relative"
                            w="full"
                            h={['380px', '380px', '480px', '520px']}
                            mb={[0, 0, 0, 3.5]}
                            backgroundColor="gray.100"
                            backgroundImage={`url(${artwork.url})`}
                            backgroundSize={"cover"}
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            borderRadius={"3xl"}
                        >
                            { children }
                        </Box>
                    </CarouselItem>
                ))
            }
        </Carousel>
    )
}

export default ArtworkCarousel