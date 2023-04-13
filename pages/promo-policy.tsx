import * as React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import PageLayout from 'layouts/PageLayout';
import styles from 'styles/Policy.module.css';

const PromoPolicyPage: React.FC = () => {
    return (
        <PageLayout>
            <Box className="page-container">
                <Heading mb={6}>
                    ARTSPLIT Survey Terms and Conditions
                </Heading>

                <Text mb={4} textAlign="justify">
                    You are invited to participate in a survey being conducted by ARTSPLIT.
                    The purpose of the survey is to learn how learn about your experience with ARTSPLIT
                    and how to make it better. Participation is voluntary. In participating, please provide
                    relevant and responsible responses; refrain from disparaging, offensive, harassing or otherwise
                    inappropriate language; and refrain from including any sensitive information of any kind.
                    Please note that our privacy policy and terms and conditions of our platform are made part of
                    these terms and conditions by reference.
                </Text>

                <Box as='ol' className="policy-container">
                    <li>
                        Participation

                        <ol>
                            <li>
                                The survey is open to ARTSPLIT users with the following exception of
                                Staff and related persons of the VFD group
                            </li>
                            <li>
                                Please submit a survey response only once
                            </li>
                        </ol>
                    </li>

                    <li>
                        Prices

                        <ol>
                            <li>
                                For submitting a survey form, you may be one of the lucky participants to win a price.
                            </li>
                            <li>
                                The winners will be drawn at random
                            </li>
                            <li>
                                ARTSPLIT's of a particular brand as prizes does not imply any affiliation with or endorsement of such brands.
                            </li>
                            <li>
                                The prizes are non-exchangeable, non-negotiable, non-transferable and no alternatives will be offered.
                            </li>
                            <li>
                                The decision of ARTSPLIT regarding any aspect of the prize draw is final and binding and
                                no correspondence will be entered into about it.
                            </li>
                        </ol>
                    </li>

                    <li>
                        ARTSPLIT Free Prize Draw Terms and Conditions Winner announcement

                        <ol>
                            <li>
                                Winners will be notified via email.
                            </li>
                            <li>
                                ARTSPLIT will attempt to contact winners by email up to two times.
                                If a response is not received from a winner within 24 hours, ARTSPLIT
                                reserves the right to choose and notify a new winner.
                            </li>
                        </ol>
                    </li>

                    <li>
                        Data protection and publicity

                        <ol>
                            <li>
                                You consent to any personal information you provide in entering the prize draw being
                                used by ARTSPLIT for the purposes of the survey, future marketing and administering the prize draw.
                            </li>
                            <li>
                                All personal information shall be used in accordance with the ARTSPLIT's Data Protection Policy

                            </li>
                        
                        </ol>
                    </li>
                    
                    <li>
                        General

                        <p>
                            ARTSPLIT reserve the right to terminate or withdraw this survey, and your
                            opportunity to participate in the survey or any prize, at any time and for any reason.
                            We alone have the right to view and the survey results and may choose in its sole discretion
                            not to disclose the survey results to you.
                        </p>
                    </li>
                </Box>
            </Box>
        </PageLayout>
    )
}

export default PromoPolicyPage