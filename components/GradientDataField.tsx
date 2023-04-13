import React from 'react'
import { Stack, Box, Text, BoxProps } from '@chakra-ui/react'

export interface GradientDataFieldProps {
    label: string;
    children: React.ReactNode;
}

const GradientDataField: React.FC<GradientDataFieldProps & BoxProps> = ({
    label, children, ...props
}) => {
    return (
        <Stack { ...props }>
            <Text color="warm-primary">
                { label }
            </Text>

            <Box
                py={2}
                px={6}
                position="relative"
                background="linear-gradient(275.5deg, rgba(255, 210, 77, 0.1) 0%, rgba(255, 111, 0, 0) 70%)"
                color="white"
                fontFamily="heading"
                fontWeight="bold"
                fontSize="xl"
                textAlign="center"
                height="auto"
                borderRight="1px solid #FFD24D90"
                _before={{
                    content: '" "',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '1px',
                    background: 'linear-gradient(270.76deg, #FFD24D -8.69%, rgba(0, 0, 0, 0) 73.48%)'
                }}
                _after={{
                    content: '" "',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '1px',
                    background: 'linear-gradient(270.76deg, #FFD24D -8.69%, rgba(0, 0, 0, 0) 73.48%)'
                }}
            >
                { children }
            </Box>
        </Stack>
    )
}

export default GradientDataField