import React from 'react'
import PageLayout from 'layouts/PageLayout'
import AvailablePositions from 'components/AvailablePositions'
import {
    Box,
    Circle,
    Heading,
    Text,
    SimpleGrid,
    Image,
    Center,
    Stack,
    Button,
    Link
} from '@chakra-ui/react'
import Page from './page.json'
import { slugify } from 'utils/formatters'

const CareerPage: React.FC = () => {
    return (
        <PageLayout title="Careers at Artsplit" pre={false}>
            <Box as="section" className="page-container" py={[24, 36]}>
                <SimpleGrid columns={[1, 1, 1, 2, 2]}>
                    <Box>
                        <Stack mb={4}>
                            <Heading fontSize={['3xl', '3xl', '5xl', '8xl']} fontWeight={500} lineHeight="none">
                                Join the New
                            </Heading>
                            <Heading fontSize={['3xl', '3xl', '5xl', '8xl']} fontWeight={500} lineHeight="none" className="primary-gradient-text">
                                Art <em>Squad</em>
                            </Heading>
                        </Stack>

                        <Text fontSize={['sm', 'md', 'lg']} lineHeight={[1.6, 1.8]} maxW={480}>
                            We are more than just a work place, We are a family.
                            We are a dedicated team bringing the art world to a brighter future.
                        </Text>

                        <Box mt={12}>
                            <Button as={Link} href="#available-positions" size="lg">
                                See available jobs
                            </Button>
                        </Box>
                    </Box>

                    <Center>
                        <Image
                            src="/career-hero-image.png"
                            maxHeight={420}
                            rounded="3xl"
                        />
                    </Center>
                </SimpleGrid>
            </Box>

            <Box as="section" bgColor="#FBF7F3" py={24}>
                <Box className="page-container">
                    <Center flexDir="column">
                        <Heading mb={2}>
                            Build your career with our amazing team
                        </Heading>
                        <Text color="gray.500" fontSize="md" mb={12}>
                            Join great minds, who you grow with and learn together.
                        </Text>
                    </Center>
                </Box>
            </Box>

            <Box as="section" className="page-container" py={24}>
                <Heading textAlign="center" mb={12}>
                    Why you should be part of us
                </Heading>

                <SimpleGrid columns={[1, 1, 2, 4, 4]} gap={6} rowGap={4}>
                    {
                        Page.reasons.map((reason) => (
                            <Box key={reason.title} p={6} rounded="3xl" borderWidth={1}>
                                <Circle size={16} className="primary-gradient" mb={6}>
                                    <Image
                                        src={reason.icon}
                                        alt={`${slugify(reason.title)}-image`}
                                    />
                                </Circle>

                                <Heading fontSize="2xl" mb={1.5} fontWeight={500}>
                                    { reason.title }
                                </Heading>
                                <Text fontSize="sm">
                                    { reason.body }
                                </Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>

            <AvailablePositions />
        </PageLayout>
    )
}

export default CareerPage