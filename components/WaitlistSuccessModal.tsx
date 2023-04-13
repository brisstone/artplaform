import React from 'react'
import NextLink from 'next/link'
import {
    Box,
    Button,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Link,
    Image,
    Center
} from '@chakra-ui/react'
import { useRouter } from 'next/router'


const WaitlistSuccessModal: React.FC = () => {
    const Router = useRouter()
    const isOpen = React.useMemo(
        () => 'join-waitlist-success' in Router.query,
        [Router.query]
    )
    const closeModal = () => {
        Router.push(Router.basePath, undefined, {
            scroll: false
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={closeModal} size="lg" isCentered>
            <ModalOverlay />

            <ModalContent textAlign="center" p={[6, 6, 12]} m={2}>
                <ModalHeader>
                    <Image src="/music-split.svg" alt="MusicSplit logo" />
                </ModalHeader>

                <ModalBody>
                    <Heading color="primary" mb={6}>
                        Thank you for
                        <br />
                        Joining the Waitlist.
                    </Heading>

                    <Box fontSize={['sm', 'md', 'lg']}>
                        <Text>
                            Get ready to Play and Get Paid.
                        </Text>
                        <Text>
                            More details coming soon
                        </Text>
                    </Box>
                </ModalBody>

                <ModalFooter as={Center} justifyContent="center" mt={16}>
                    <NextLink href="/musicsplit" passHref>
                        <Button as={Link} onClick={closeModal} size="lg">
                            Learn more about MusicSplit
                        </Button>
                    </NextLink>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default WaitlistSuccessModal