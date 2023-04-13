import * as React from 'react';
import { Box, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import PageLayout from 'layouts/PageLayout';
import styles from 'styles/Policy.module.css';

const InterestPaymentPolicyPage: React.FC = () => {
    return (
        <PageLayout>
            <Box className="page-container">
                <Heading mb={6}>
                    INTEREST PAYMENT ON WALLET BALANCE POLICY
                </Heading>

                <Box as='ol' className="policy-container">
                    <li>
                        Introduction

                        <p>
                            This interest payment on average wallet balance policy provides guiding principles
                            on how interests paying loans can be given in a cost-effective, efficient,
                            and low-risk manner. The policy should be updated as required through a consultative
                            process facilitated by the Treasury Unit to cater for changing business requirements/dynamics.
                            All customers who qualify for Interest payment from ARTSPLIT are bound by this Policy.
                        </p>
                    </li>

                    <li>
                        Objective

                        <ol>
                            <li>
                                This policy details the guiding principles applicable for interest payment on average
                                wallet balance for all ARTSPLIT app users.
                            </li>

                            <li>
                                It highlights the terms and conditions that qualifies an ARTSPLIT app user
                                for interest payment on the average wallet balance.
                            </li>

                            <li>
                                Details the operational dynamics/processes and responsibilities surrounding
                                payment of interest to ARTSPLIT App users.
                            </li>
                        </ol>
                    </li>

                    <li>
                        Definitions

                        <ol>
                            <li>
                                <strong>Average Wallet Balance:</strong>{' '}
                                A wallet balance is the average amount of funds present in a wallet account of an
                                ARTSPLIT App user, within a specified period of time. The wallet balance is always
                                the average net amount after factoring in all deposits and withdrawals. A wallet
                                balance that falls below zero represents a net debt—for example, when there is
                                an overdraft on the wallet. Such wallets account that has existing overdraft may
                                also reflect an amount owed.
                            </li>
                            
                            <li>
                                <strong>Interest on Wallet Balance:</strong>{' '}
                                This refers to interest earned per annum accrued daily on average credit balance
                                and is payable monthly to new or existing ARTSPLIT app user, If the ARTSPLIT app user is active.
                            </li>
                        </ol>
                    </li>

                    <li>
                        Terms & Conditions

                        <ol>
                            <li>
                                Only active ARTSPLIT App users i.e., users with recorded transaction(s) within the month
                                are qualified to earn interest on wallet balance
                            </li>

                            <li>
                                Only active ARTSPLIT App users with average credit balance will earn interest on wallet balance.
                                ARTSPLIT App users with OD (refer to ARTSPLIT Overdraft Policy) limits do not qualify
                                for interest payment on wallet balance.
                            </li>

                            <li>
                                Aggregate balance shall be for a period of 30 days or 31 days starting from the
                                1st to the last of every month.
                            </li>

                            <li>
                                Interest earned will be paid on the first working day of the next month.
                            </li>

                            <li>
                                Withholding Tax of 10% shall be applicable on the interest.
                            </li>

                            <li>
                                Only active users who have completed advanced KYC verification on the ARTSPLIT APP can earn interest
                                on the average wallet balance.
                            </li>

                            <li>
                                Customers who have made 3 withdrawals in a month will not be entitled to Interest on account.
                            </li>
                        </ol>
                    </li>
                    
                    <li>
                        Pricing

                        <p>
                            2.5% per annum (Net of WHT) on average balance per month, to be paid on the last day of each month
                        </p>
                    </li>

                    <li>
                        Justification

                        <ol>
                            <li>
                                Interest payment on the wallet balance will increase user activities on the ARTSPLIT App. 
                            </li>
                            <li>
                                Interest payment will encourage ARTSPLIT App users to grow the amount of funds in their
                                wallet to earn more interest. 
                            </li>
                            <li>
                                Interest payment will discourage zero (0) wallet balances on the ARTSPLIT App.
                                This will also discourage default in approved Overdrafts. 
                            </li>
                            <li>
                                This will serve as one of the unique selling points to encourage potential client to
                                join the ARTSPLIT App community. 
                            </li>
                        </ol>
                    </li>

                    <li>
                        Dynamics & Responsibilities

                        <p>
                            <table border={1} cellPadding={6}>
                                <thead>
                                    <tr>
                                        <th>ACTION</th>
                                        <th>RESPONSIBILITY</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            ARSTPLIT App users that meet conditions required to earn interest
                                            on wallet balance (i.e., active users with credit balance) 
                                        </td>
                                        <td>
                                            IT/Finance Team
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            Aggregate monthly balance will be determined after a review of the wallet activities
                                            between the 1st and 28th of every month 
                                        </td>
                                        <td>
                                            IT/Finance/Treasury 
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            Interest accrued on each wallet balance is determined and applied
                                        </td>
                                        <td>
                                            Treasury/Finance
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            Funding of GL Account for interest payment 
                                        </td>
                                        <td>
                                            Treasury
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            Review and approval 
                                        </td>
                                        <td>
                                            Finance Manager/internal control/ED Finance
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            Application of funds to user wallets
                                        </td>
                                        <td>
                                            Finance/IT
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </li>
                </Box>
            </Box>
        </PageLayout>
    )
}

export default InterestPaymentPolicyPage