import * as React from 'react';
import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    Center,
    Card,
    Image,
    Button
} from '@chakra-ui/react'
import useAppDownloader from 'hooks/useAppDownloader';

const reasons = [
    {
        "title": "Uncorrelated Asset",
        "icon": "/icons/folder.svg",
        "body": "Because they operate independently of public markets, music royalties are the purest form of alternative investment"
    },
    {
        "title": "Passive Income",
        "icon": "/icons/income.svg",
        "body": "Earn royalties as the music is streamed from all over the world without any additional effort."
    },
    {
        "title": "High Yield",
        "icon": "/icons/cash-plus.svg",
        "body": "Music royalties have a history of high earnings (avg. ROI of 10%) and the potential to deliver double-digit yields that compete with bonds and dividend-paying stocks."
    }
]

const WhyMusicSplit: React.FC<{
    bg?: string;
    card?: string;
}> = ({ bg='#F3F4F6', card='white' }) => {
    const { openApp } = useAppDownloader()

    return (
        <Box as="section" bgColor={bg} py={[12, 12, 24]}>
            <Box className="page-container">
                <Heading maxW={640} mx="auto" mb={4} textAlign="center">
                    Why you Should Have Royalties in Your Portfolio?
                </Heading>

                <Text
                    color="gray.600"
                    fontSize={['sm', 'sm', 'md', 'lg']}
                    maxW={800}
                    mx="auto"
                    textAlign="center"
                    lineHeight={1.8}
                >
                    As an investor, you are always on the lookout for ways to protect your capital while increasing your yield.
                    Lots of other investors like you also seek diversification through alternative investment because stocks,
                    bonds and other similar investment assets can be vulnerable to macroeconomic trends.
                    Music royalties are a fantastic option. The artiste creates the asset once and you collect royalties on it
                    indefinitely from the streaming revenue.
                </Text>

                <SimpleGrid columns={[1, 1, 1, 1, 3]} gap={[12, 12]} mt={[12, 12, 24]}>
                    {
                        reasons.map((reason) => (
                            <Center key={reason.title} flexDir="column" py={12} px={10} bg={card} shadow={0} rounded="3xl">
                                <Center className="primary-gradient" w={20} h={20} rounded="full" mb={6}>
                                    <Image src={reason.icon} alt={reason.title} />
                                </Center>

                                <Heading fontSize="2xl" mb={2}>
                                    { reason.title }
                                </Heading>
                                <Text fontSize={['sm', 'md']} lineHeight={[1.6, 1.8]} color="gray.600" textAlign="center">
                                    { reason.body }
                                </Text>
                            </Center>
                        ))
                    }
                </SimpleGrid>

                <Center mt={12}>
                    <Button onClick={() => openApp()} size="lg">
                        Get Started
                    </Button>
                </Center>
            </Box>
        </Box>
    )
}

export default WhyMusicSplit