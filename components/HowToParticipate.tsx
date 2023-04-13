import React from 'react'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

const steps = [
    {
        title: 'Download ArtSplit',
        body: 'Visit your APP Store and search for ARTSPLIT. Download and sign up using either your email or one of either your Gmail, Facebook or Apple ID'
    },
    {
        title: 'Fund your wallet',
        body: 'After sign up, go to your account and profile to complete your verification through the quick and easy KYC requirements. Once completed, go back to your profile and fund your wallet either through your card or bank transfer'
    },
    {
        title: 'Buy Your Splits',
        body: 'Once your wallet is funded, go to the explore page to preview the works available for Split. Select the work you wish to collect, place a bid with the number of splits you require, your bid amount per unit split, and continue to complete your bid.'
    },
    {
        title: 'Lease the works',
        body: 'To have custodianship of these works after the Split auction is complete, there would be another bid to enable you have the physical artwork for an agreed period. Ensure your wallet is funded to partake in this process as well. Terms and Conditions apply'
    }
]

const HowToParticipate: React.FC = () => {
    return (
        <Box mt={24} mb={12}>
            <Box className="page-container">
                <Heading mb={12}>
                    How to Participate
                </Heading>

                <SimpleGrid columns={[1, 1, 1, 2, 2, 4]} gap={6}>
                    {
                        steps.map((step, index) => (
                            <Box key={`step-${step.title}`} bgColor="#FBF7F3" px={8} py={12} rounded="3xl">
                                <Heading fontSize="xl" color="primary" fontWeight={500} mb={3}>
                                    { index + 1 } - { step.title }
                                </Heading>

                                <Text fontSize="sm">
                                    { step.body }
                                </Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default HowToParticipate