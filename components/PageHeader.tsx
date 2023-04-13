import * as React from 'react';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

export interface PageHeaderProps {
    title: React.ReactNode;
    children: React.ReactNode | Array<React.ReactNode>;
    constrained?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, constrained=true }) => {
    return (
        <Box className={constrained ? 'page-container' : ''} mt={[5, 10, 20]} mb={[10, 20, 24]}>
            <Flex justifyContent="space-between" alignItems="center" mb={[6, 12]}>
                <Heading fontSize={['2xl', '3xl', '4xl', '5xl']} fontWeight={500}>
                    { title }
                </Heading>

                <Image
                    src="/invest-in-art-with-artsplit.svg"
                    alt=""
                    width={[70, 150]}
                    className="rotate-forever"
                />
            </Flex>

            <Box color="#6B6968" fontSize={['sm', 'sm', 'md']}>
                { children }
            </Box>
        </Box>
    )
}

export default PageHeader