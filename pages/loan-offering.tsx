import { Box, ListItem, OrderedList, Text } from '@chakra-ui/react'
import LegalContent from 'components/LegalContent'
import LegalContentItem from 'components/LegalContentItem'
import PageLayout from 'layouts/PageLayout'
import React from 'react'

const LoanOfferingPage: React.FC = () => {
    return (
        <PageLayout title="Terms & Conditions for Loan Offering">
            <LegalContent title="Terms & Conditions for Loan Offering">
                <Text mb={8}>
                    <strong>ARTSPLIT Limited</strong> (“ARTSPLIT”) hereby approves this credit facility hereinafter
                    called “Loan” to eligible Users (hereinafter called “Borrowers”). The Loan shall be available
                    in-app on the ARTSPLIT Platform (“Platform”) to an interested person for the purchase of
                    artworks via split and lease auction or listing of artworks to bridge
                    funding gaps subject to approval under the following terms and conditions: 
                </Text>

                <LegalContentItem title="Eligibility">
                    <Text>
                        To be eligible, a borrower must meet the below conditions:
                    </Text>
                    <OrderedList listStyleType="lower-alpha">
                        <ListItem>
                            the Borrower is a registered and active user of the Platform.
                        </ListItem>
                        
                        <ListItem>
                            Borrower would have completed advanced KYC verification on the Platform.
                        </ListItem>
                        
                        <ListItem>
                            Borrower must accept these terms and conditions by clicking “I Agree” option provided on the application page and provided any documentation ARTSPLIT may require.
                        </ListItem>

                        <ListItem>
                            Payment of all fees associated with the Loan, which includes management fees and any other fees ARTSPLIT may communicate from time to time. 
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Amount">
                    <Text>
                        The Loan amount would be that which is requested by the Borrower and approved by ARTSPLIT from time to time on any
                        criteria as ARTSPLIT may decide in its sole discretion from time to time. The maximum loan amount a Borrower may
                        access shall not exceed 50% of the Borrower's portfolio balance at the date of application.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Tenor">
                    <Text>
                        The Loan shall be for a tenor as requested by the Borrower and approved by ARTSPLIT. The tenor of the facility
                        shall commence upon completion of the application via the Platform and disbursement into the Borrower's
                        wallet on the Platform. At the expiration of the tenor, the Borrower shall repay the Loan and
                        interest (the “Due Date”) 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Exclusivity">
                    <Text>
                        The Loan shall be sole for the purchase of Artworks on the Platform.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Interest and Applicable fees">
                    <OrderedList>
                        <ListItem>
                            The interest on a Loan shall be dependent on the tenor of the Loan. Upon entering the sum required and
                            tenor of the Loan, the applicable interest rate will be displayed on the screen for the Borrower's
                            confirmation and acceptance. 
                        </ListItem>

                        <ListItem>
                            The interest rate may be revised in line with money market conditions and shall be communicated to the Borrower before being implemented on the Loan. ARTSPLIT reserves the right to cancel or recall the Loan if the customer does not agree with the revised rate. 
                        </ListItem>

                        <ListItem>
                            The Borrower shall be charged a Management fee of 0.5% of the sum requested which shall be deducted from the wallet of the Borrower prior to disbursement of the loan. 
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Security">
                    <Text>
                        As security for the Loan, ARTSPLIT shall place a lien on the Borrower's portfolio balance equal to 150% of
                        the Loan amount for the Loan Tenor.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Repayment Source">
                    <Text>
                        Funds in the Borrower's wallet or artworks in the Borrower's Portfolio shall be applied towards the repayment
                        of the Loan and the interests thereof. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Repayment">
                    <OrderedList>
                        <ListItem>
                            ARTSPLIT will automatically debit the Borrower's wallet with the outstanding balance at the
                            end of the tenor as a bulk sum repayment. If the Borrower opts for repayment by installments,
                            ARTSPLIT shall automatically deduct the applicable repayment amount (interest inclusive)
                            on each repayment date.
                        </ListItem>

                        <ListItem>
                            Prior to expiration of the tenor, the Borrower may repay all or part of the Loan by using the repayment
                            features provided on the Platform.
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Conditions">
                    <Text>
                        The Borrower irrevocably and unconditionally undertakes as follows:
                    </Text>

                    <OrderedList>
                        <ListItem>
                            ARTSPLIT shall in addition to any lien or similar right to which it may be entitled to,
                            at any time and without notice to the Borrower combine or consolidate all or any of
                            the Borrower's accounts and set off or transfer any sum or sums standing to the credit
                            of any one or more of such accounts on the Platform in or towards satisfaction of the
                            Borrower's liabilities to ARTSPLIT.
                        </ListItem>

                        <ListItem>
                            ARTSPLIT reserves the right to withhold further disbursement, recall or cancel the
                            facility for reasons of default or non-compliance with the covenants hereunder.
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Immediate Repayment">
                    <Text>
                        The occurrence of any of the following events but not limited to those listed below shall cause all
                        outstanding amounts under the Loan to become immediately due and repayable: 
                    </Text>

                    <OrderedList>
                        <ListItem>
                            If at the expiration of the Due Date, the Borrower's wallet balance is insufficient to settle the Loan and interest and such default continues unremedied after fourteen days from the Due Date.
                        </ListItem>
                        
                        <ListItem>
                            If the Borrower commits a breach of any terms and conditions of the ARTSPLIT Platform.
                        </ListItem>

                        <ListItem>
                            If any representation or warranty given or made by the Borrower is inaccurate in any respect when made or delivered.
                        </ListItem>
                        
                        <ListItem>
                            If the Borrower stops, suspends, or deletes his/her account or stops activities thereon. 
                            If any extraordinary situation arises such that the continuance of the transaction in the opinion of ARTSPLIT makes it impossible for the Borrower to discharge his/her obligations.
                        </ListItem>

                        <ListItem>
                            If there should, in the opinion of ARTSPLIT, be a material adverse change in the financial condition of the Borrower.
                        </ListItem>

                        <ListItem>    
                            In the event of death of the Borrower or any other reason that makes it impossible for the loan to be repaid by the Borrower.
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Consequences of Default">
                    <Text>
                        ARTSPLIT shall by written notice to the Borrower, declare that that the Loan has
                        become immediately payable together with interest accrued thereon (where applicable).
                        The Loan shall be cancelled and ARTSPLIT shall have the right to deduct the Loan amount
                        and applicable interest from the wallet of the Borrower. If the funds in the wallet are
                        insufficient to offset the Loan and interest the value of the remainder of the Loan sum
                        shall settled from the Borrower's security.  
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Legal and Other Expenses">
                    <OrderedList>
                        <ListItem>
                            Nothing in this agreement restricts the right of ARTSPLIT to employ lawful means to recover the Loan from the Borrower (including but not limited to instituting a civil or criminal action against the Borrower). All costs and expenses (including legal fees) incurred by ARTSPLIT in connection with recovery of any Loan, enforcing the terms and conditions, any processes, claims, or proceedings instituted by or against ARTSPLIT in connection with this Agreement.
                        </ListItem>

                        <ListItem>
                            All payments whether of principal, interest or otherwise shall be made free and clear of and without deduction of any taxes, duties, charges, fees, deductions, withholdings, set- offs, counterclaims, restrictions, or conditions of any nature.
                        </ListItem>
                        
                        <ListItem>
                            If at any time, provision of the law or any taxing authority shall require the Borrower to make any such deduction or withholding from any such payment, then the sum due from the Borrower in respect of such payment shall be increased to the extent necessary to ensure that after making of such deductions or withholding, ARTSPLIT receives a net equal to the sum which it would have received had no such deduction or withholding been required to be made. 
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Representations and Warranties">
                    <Text>
                        The Borrower hereby irrevocably and unconditionally represents and warrants that:
                    </Text>

                    <OrderedList>
                        <ListItem>
                            All information given to ARTSPLIT is true, correct, complete and not misleading.
                        </ListItem>
                        
                        <ListItem>
                            There is no pending or threatened actions or proceedings affecting the Borrower before any court or other body which may adversely affect the Borrower's ability to perform and observe its obligations on this facility.
                        </ListItem>

                        <ListItem>
                            The Borrower is not in default under any other agreement relating to indebtedness.
                        </ListItem>
                        
                        <ListItem>
                            No part of this facility will be used to pay amounts owing to ARTSPLIT or any entity or person related to ARTSPLIT under another credit arrangement, without the consent of ARTSPLIT in writing. 
                        </ListItem>

                        <ListItem>
                            In the event of dispute, the Borrower shall give ARTSPLIT ninety (90) day prior written pre action notice of the Borrower’s intention to proceed against ARTSPLIT, such notice to be served at ARTSPLIT’s registered office address. The Borrower shall not be entitled to a pre-action notice prior to ARTSPLIT’s commencement of any claim. 
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Remedies and Waivers">
                    <Text>
                        Failure or delay by ARTSPLIT in exercising any remedy, power or right not be considered
                        as a waiver or impairment thereof nor shall it affect or impair any such remedies, powers,
                        or rights in respect of any default. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Information">
                    <Text>
                        The Borrower authorizes ARTSPLIT to share any personal information of the Borrower with
                        any third party, including without limitation, lenders, credit bureaus, credit reference
                        agencies, payment processing agencies, law enforcement, customer service providers and
                        collection agencies for any purpose in relation to this facility or ARTSPLIT's business
                        functions and activities, which include, without limitation, assessing the Borrower's
                        credit risk and ability to repay debts. ARTSPLIT reserves the right to request from the
                        Borrower any information or document which it may require in relation to this facility,
                        including for assessing the Borrower's application, identifying the Borrower or for performing
                        all required verifications. The Borrower hereby authorizes ARTSPLIT to obtain any information
                        about the Borrower that it may require in relation to this facility, from any third party and
                        further authorizes the relevant third party to disclose such information to us.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Variation">
                    <Text>
                        Only ARTSPLIT may vary these terms and conditions at any time if it is required or it
                        is advisable for us to do so by law or change in market conditions or to maintain our
                        rate of return on this Loan. Any variation to these terms and conditions is binding on the
                        Borrower from the date specified in such notice. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Assignment">
                    <Text>
                        The Borrower shall not assign all or any part of his/her rights, title, interest
                        or obligations herein to a third party without ARTSPLIT's written permission.
                        ARTSPLIT may assign its rights and obligations without the consent of the Borrower. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Notices">
                    <Text>
                        All notices to be issued to the Borrower by ARTSPLIT shall be done via in-app
                        notification or via email provided by the Borrower during his/her account set up
                        and such notice shall be deemed adequate notice. All notice to ARTSPLIT may be done
                        via provided channels as communicated via the platform from time to time. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Termination">
                    <Text>
                        These terms and conditions shall remain in force as long as ARTSPLIT remains a
                        creditor of the Borrower or as long as any sums remain outstanding. 
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Miscellaneous">
                    <OrderedList>
                        <ListItem>
                            The illegality, invalidity, or unenforceability of a provision of these terms and conditions under any law will not affect the legality, validity, or enforceability of other provisions of this agreement. 
                        </ListItem>
                        
                        <ListItem>
                            These terms and conditions shall be governed and construed in accordance with Nigerian law. All disputes shall be settled amicably between ARTSPLIT and the Borrower. Where the dispute is not resolved amicably within 14 days or such time as may be stipulated by ARTSPLIT, either party may refer the dispute to a court of competent jurisdiction.
                        </ListItem>
                        
                        <ListItem>
                            The Borrower indemnifies ARTSPLIT against any and all claims, damages, losses, and expenses arising out of the grant of the Loan and this Agreement. 
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>
            </LegalContent>
        </PageLayout>
    )
}

export default LoanOfferingPage