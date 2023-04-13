import * as React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Seo from 'components/Seo';
import Header from 'components/Header';
import Footer from 'components/Footer';

export interface PageLayoutProps {
    title?: string;
    description?: string;
    image?: string | React.ReactNode;
    imageAlt?: string;
    children: React.ReactNode | Array<React.ReactNode>;
    pre?: boolean;
    clearFixed?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
    title,
    description,
    image,
    imageAlt,
    children,
    pre = true,
    clearFixed = true
}) => {
    return (
        <>
            <Seo title={title} description={description} />
            <Header clear={clearFixed} />

            <Box as="main">
                {
                    image && (
                        typeof image === 'string'
                        ? <Image src={image} alt={imageAlt} />
                        : image
                    )
                }

                <Box as="section" mt={pre ? 12 : 0}>
                    { children }
                </Box>
            </Box>

            <Footer />
        </>
    )
}

export default PageLayout