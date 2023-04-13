import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Center, Spinner } from '@chakra-ui/react'

const FourOhFour: NextPage = () => {
    const Router = useRouter()
    React.useEffect(() => {
        Router.replace('/')
    }, [])

    return (
        <Center h="100vh">
            <Spinner />
        </Center>
    )
}
export default FourOhFour