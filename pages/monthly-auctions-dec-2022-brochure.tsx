import { Box } from '@chakra-ui/react';
import Seo from 'components/Seo';
import * as React from 'react';

const MonthlyAuctionsBrochure: React.FC = () => {
    return (
        <Box as="div" position="relative" width="full" h={0} pt="max(60%, 326px)">
            <Seo />
            <iframe
                allow="clipboard-write"
                src="https://e.issuu.com/embed.html?d=artsplit_monthly_auction_ghana&hideIssuuLogo=true&hideShareButton=true&u=artsplit"
                sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                allowFullScreen
                style={{
                    position: 'absolute',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
            ></iframe>
        </Box>
    )
}

export default MonthlyAuctionsBrochure