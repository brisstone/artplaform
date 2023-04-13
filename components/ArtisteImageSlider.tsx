import * as React from 'react';
import {
    Box,
    Flex,
    Center,
    Image,
    IconButton,
    Circle
} from '@chakra-ui/react'
import { Carousel } from 'react-bootstrap';
import useSliderNavigation from 'hooks/useSliderNavigation';

const ArtisteImageSlider: React.FC = () => {
    const images = React.useMemo(() => (
        new Array(12).fill('/artistes/king-perry')
                     .map((_, i) => `${_}-${i+1}.jpg`)
    ), [])
    const imageGroups = React.useMemo(() => Math.ceil(images.length / 3), [images])

    const {
        currentIndex,
        setCurrentIndex,
        previous,
        next
    } = useSliderNavigation(images.length)

    const {
        currentIndex: currentIndexBig,
        setCurrentIndex: setCurrentIndexBig,
        previous: previousBig,
        next: nextBig
    } = useSliderNavigation(imageGroups)
    
    return (
        <Box bgColor="#F9FAFB" py={[16, 16, 16, 24]}>
            <Box className="page-container" position="relative">
                <Box
                    as={Carousel}
                    position="relative"
                    controls={false}
                    indicators={false}
                    activeIndex={currentIndex}
                    display={['block', 'block', 'none', 'none', 'none']}
                >
                    {
                        images.map((image) => (
                            <Box as={Carousel.Item} key={`slide-${image}`}>
                                <Image src={image} alt={image} />
                            </Box>
                        ))
                    }
                </Box>
                
                <Box
                    as={Carousel}
                    position="relative"
                    controls={false}
                    indicators={false}
                    activeIndex={currentIndexBig}
                    display={['none', 'none', 'block', 'block', 'block']}
                >
                    {
                        new Array(imageGroups).fill('?').map((_, i) => (
                            <Box as={Carousel.Item} key={`slide-${i}`}>
                                <Center gap={10}>
                                    {
                                        images.slice(i * 3, (i * 3) + 3).map((image) => (
                                            <Image key={image} src={image} alt={image} />
                                        ))
                                    }
                                </Center>
                            </Box>
                        ))
                    }
                </Box>

                <Flex
                    position="absolute"
                    left={0}
                    right={0}
                    top={0}
                    bottom={0}
                    alignItems="center"
                    justify="space-between"
                    mt={-20}
                    mx={[3, 3, 3, 0]}
                    className="page-container"
                >
                    <IconButton
                        onClick={previous}
                        aria-label="Previous"
                        bg="primary"
                        size="lg"
                        display={['flex', 'flex', 'none', 'none', 'none']}
                    >
                        <Image src="/icons/arrow-left.svg" alt="left arrow" width={6} />
                    </IconButton>

                    <IconButton
                        onClick={previousBig}
                        aria-label="Previous"
                        bg="primary"
                        size="lg"
                        display={['none', 'none', 'none', 'flex', 'flex']}
                    >
                        <Image src="/icons/arrow-left.svg" alt="left arrow" width={6} />
                    </IconButton>

                    {/* Next buttons */}
                    <IconButton
                        onClick={next}
                        aria-label="Next"
                        bg="primary"
                        size="lg"
                        display={['flex', 'flex', 'none', 'none', 'none']}
                    >
                        <Image src="/icons/arrow-right.svg" alt="right arrow" width={6} />
                    </IconButton>

                    <IconButton
                        onClick={nextBig}
                        aria-label="Next"
                        bg="primary"
                        size="lg"
                        display={['none', 'none', 'none', 'flex', 'flex']}
                    >
                        <Image src="/icons/arrow-right.svg" alt="right arrow" width={6} />
                    </IconButton>
                </Flex>

                {/* Pagination */}
                <Center mt={16} gap={2.5} display={['flex', 'flex', 'none', 'none', 'none']} position="relative">
                    {
                        images.map((_, i) => (
                            <Circle
                                key={`indicator-${_}-${i}`}
                                onClick={() => setCurrentIndex(i)}
                                cursor="pointer"
                                bgColor={currentIndex === i ? 'primary' : 'gray.300'}
                                size={currentIndex === i ? 4 : 3}
                            />
                        ))
                    }
                </Center>

                <Center mt={16} gap={4} display={['none', 'none', 'flex', 'flex', 'flex']} position="relative">
                    {
                        new Array(imageGroups).fill('page').map((_, i) => (
                            <Circle
                                key={`indicator-${_}-${i}`}
                                onClick={() => setCurrentIndexBig(i)}
                                cursor="pointer"
                                bgColor={currentIndexBig === i ? 'primary' : 'gray.300'}
                                size={currentIndexBig === i ? 4 : 3}
                            />
                        ))
                    }
                </Center>
            </Box>
        </Box>
    )
}

export default ArtisteImageSlider