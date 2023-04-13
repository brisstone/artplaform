import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const AvailablePositions: React.FC = () => {
    return (
        <Box as="section" id="available-positions" bgColor="#FBF7F3" py={[12, 24]}>
            <Box className="page-container" textAlign="center">
                <Heading mb={4}>
                    Available positions
                </Heading>

                <Box mt={16}>
                    <Text color="gray.500">
                        There are no jobs here yet.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default AvailablePositions