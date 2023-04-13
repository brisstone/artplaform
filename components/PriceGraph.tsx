import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic'
// import Chart from "react-apexcharts";
import { formatDate, formatPrice } from 'utils/formatters';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const PriceGraph: React.FC<{ data: Array<any> }> = ({ data }) => {
    const prices = React.useMemo(() => (
        data?.map((price) => price.amount)
    ), [data])

    const dates = React.useMemo(() => (
        data?.map((price) => price.transaction_date)
    ), [data])

    const colors = ['#FF0000']
    const options = {
        colors,
        chart: {
            id: 'basic-price-history',
            fontFamily: 'Inter',
            toolbar: {
                show: false
            }
        },
        noData: {
            text: 'No price history'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false
        },
        legend: {
            show: false
        },
        stroke: {
            curve: 'smooth',
            width: 1.5,
            colors
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 0,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: ['', ...dates],
            labels: {
                show: false
            },
            tooltip: {
                show: false
            }
        },
        yaxis: {
            show: false
        },
        markers: {
            size: 0
        }
    }

    return (
        <Box borderWidth={0} rounded="3xl">
            <Box mt={-5}>
                <Chart
                    // @ts-ignore
                    options={options}
                    series={[{
                        name: 'Price',
                        data: [0, ...prices]
                    }]}
                    type="area"
                    width="100%"
                />
            </Box>

            <Flex justifyContent="space-between" alignItems="center" borderTop="1px dashed #D9D9D9" mt={-6} py={2.5}>
                <Text>
                    { formatPrice(prices[0] as number) }
                </Text>

                <Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default PriceGraph