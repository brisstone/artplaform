import * as React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Heading,
    Flex,
    Box,
    Input,
    Checkbox,
    Stack,
    Alert,
    AlertIcon,
    CloseButton,
    useToast
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { API } from 'services/API.service';
import { MixpanelTracking } from 'services/Mixpanel';
const Tap = require('@tapfiliate/tapfiliate-js').default;

enum Category {
    fanOrInvestor = 'fan_investor',
    musician = 'musician'
}
interface waitlistForm {
    name: string;
    email: string;
    category: Category;
}

const reducer = (state: waitlistForm, action: { key: string | Category, payload: any }) => {
    state = {
        ...state,
        [action.key]: action.payload
    }
    return state
}

const JoinTheWaitlist: React.FC<{
    isOpen?: boolean,
    onClose?: () => any
}> = ({ isOpen, onClose }) => {
    const Router = useRouter()
    const showJoinWaitlistModal = React.useMemo(
        () => 'join-waitlist' in Router.query,
        [Router.query]
    )
    const closeModal = () => {
        Router.push(Router.basePath, undefined, {
            scroll: false
        })
        onClose?.()
    }
    const [ submitting, setSubmitting ] = React.useState(false)
    const [ form, dispatch ] = React.useReducer(reducer, {
        name: '',
        email: '',
        category: Category.fanOrInvestor
    })
    const [ error, setError ] = React.useState('')
    const schema = Yup.object().shape({
        name: Yup.string()
              .min(3, 'Full name must be at least 3 characters')
              .required('Please provide your full name'),
        email: Yup.string()
               .email('Please provide a valid email address')
               .required('Please provide your email address'),
        category: Yup.string()
                  .oneOf(['fan_investor', 'musician'])
                  .required('Please tell us why you are interested in MusicSplit')
    })
    const toast = useToast()

    const joinWaitlist = () => {
        setError('')
        setSubmitting(true)
        schema.validate(form).then(() => {
            API.post('waitlist/add_to_music', form).then((response) => {
                // @ts-ignore
                if (response.message === 'Success') {
                    MixpanelTracking.getInstance().navPressed('waitlist_signup')
                    closeModal()
                    Tap.conversion(response.data._id)
                    Router.replace('?join-waitlist-success')
                    form.name = ''
                    form.email = ''
                    form.category = Category.fanOrInvestor
                } else {
                    toast({
                        title: 'Alert',
                        // @ts-ignore
                        description: response.message,
                        // @ts-ignore
                        status: response.ok ? 'info' : 'error'
                    })
                }
            }).finally(() => setSubmitting(false))
        }).catch((error) => {
            setError(error.errors[0])
            setSubmitting(false)
        })
    }

    return (
        <Modal
            size="lg"
            isOpen={isOpen ?? showJoinWaitlistModal}
            onClose={closeModal}
            isCentered
        >
            <ModalOverlay />

            <ModalContent px={4} py={6} m={2}>
                <ModalHeader as={Heading} textAlign="center" color="primary" fontSize={['xl', 'xl', '3xl', '3xl']}>
                    Thank you for your interest!
                </ModalHeader>

                <ModalBody>
                    <Box>
                        <Text fontSize={['sm', 'md']} textAlign="center">
                            Enter your name and email address to join the waitlist.
                            When the product becomes available, we will notify you.
                            We value your privacy and will not share your information with anyone else.
                        </Text>
                    </Box>

                    <Box mt={6}>
                        {
                            error && (
                                <Alert status="error" mb={4} rounded="md">
                                    <AlertIcon />
                                    <Text fontSize="sm">{ error }</Text>
                                    <CloseButton
                                        onClick={() => setError('')}
                                        position="absolute"
                                        top={2}
                                        right={2}
                                    />
                                </Alert>
                            )
                        }

                        <Box mb={5}>
                            <Text mb={1} fontWeight={600} fontFamily="heading">
                                Full name
                            </Text>
                            <Input
                                value={form.name}
                                onChange={(e) => dispatch({
                                    key: 'name',
                                    payload: e.target.value
                                })}
                                placeholder="Enter your full name"
                                _focusVisible={{
                                    borderColor: 'primary',
                                    boxShadow: 'none'
                                }}
                            />
                        </Box>
                        
                        <Box mb={5}>
                            <Text mb={1} fontWeight={600} fontFamily="heading">
                                Email address
                            </Text>
                            <Input
                                type="email"
                                value={form.email}
                                onChange={(e) => dispatch({
                                    key: 'email',
                                    payload: e.target.value
                                })}
                                placeholder="Enter your email address"
                                _focusVisible={{
                                    borderColor: 'primary',
                                    boxShadow: 'none'
                                }}
                            />
                        </Box>
                        
                        <Box>
                            <Text mb={1} fontWeight={600} fontFamily="heading">
                                Why are you interested in MusicSplit? 
                            </Text>
                            <Box>
                                <Checkbox
                                    borderColor="primary"
                                    mb={3}
                                    isChecked={form.category === Category.fanOrInvestor}
                                    onChange={(e) => dispatch({
                                        key: 'category',
                                        payload: e.target.checked ? Category.fanOrInvestor : ''
                                    })}
                                >
                                    <Stack spacing={0} ml={2}>
                                        <Text fontWeight={600} fontFamily="heading">
                                            I am a Fan/Investor
                                        </Text>
                                        <Text fontSize="sm">
                                            I want to invest in Music Projects and earn from Royalties
                                        </Text>
                                    </Stack>
                                </Checkbox>
                                
                                <Checkbox
                                    borderColor="primary"
                                    mb={3}
                                    isChecked={form.category === Category.musician}
                                    onChange={(e) => dispatch({
                                        key: 'category',
                                        payload: e.target.checked ? Category.musician : ''
                                    })}
                                >
                                    <Stack spacing={0} ml={2}>
                                        <Text fontWeight={600} fontFamily="heading">
                                            I am a Musician
                                        </Text>
                                        <Text fontSize="sm">
                                            I want to raise funds for my music project
                                        </Text>
                                    </Stack>
                                </Checkbox>
                            </Box>
                        </Box>
                    </Box>
                </ModalBody>

                <ModalFooter as={Flex} justifyContent="center" mt={6}>
                    <Button
                        size="lg"
                        minW={200}
                        onClick={joinWaitlist}
                        isLoading={submitting}
                        loadingText="Adding you to waitlist ..."
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default JoinTheWaitlist
