import type { NextPage } from "next";
import PageLayout from "layouts/PageLayout";
import { Box, Heading, ListItem, OrderedList, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, UnorderedList, VStack } from "@chakra-ui/react";
import LegalContent from "components/LegalContent";
import LegalContentItem from "components/LegalContentItem";

const PrivacyPolicy: NextPage = () => {
  return (
    <PageLayout title="Privacy Policy">
      <LegalContent title="Privacy Policy">
        <LegalContentItem title="Introduction">
          <Text mb={3}>
            Welcome to the ARTSPLIT's (collectively referred to as "ARTSPLIT",
            `we`, `us` or `our`) privacy policy. References to “you”, “your” or
            “user” shall mean the users of ARTSPLIT website and software
            application. We respect your privacy, and we are committed to
            protecting your personal data. We have prepared this Privacy Policy to
            describe to you our practices regarding the Personal Data (as defined
            below) we collect, use, and share in connection with the ARTSPLIT
            website, mobile app, and other software provided on or in connection
            with our services, as described in our Terms of Use (collectively, the
            “Platform or Services”).
          </Text>

          <Text>
            This Policy is part of our Terms of Use, which can be viewed at:
            https://artsplit.com/use-policy. By accessing or using our Platform in
            any way, you agree that your information may be collected, stored,
            shared, and used as described in this Policy and our Terms of Use. You
            may withdraw consent at any time in writing, however such withdrawal
            does not negate our right to process your data prior to your
            withdrawal.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Purpose">
          <Text>
            This privacy policy aims to give you information on how we collect and
            process your personal data through your use of the Service, including
            any data you may provide through any medium when you sign up to our
            newsletter or purchase a product or service or take part in a
            competition.
          </Text>

          <Text>
            We do not intentionally solicit information from or market to minors.
            Our terms and condition of use require all users to be at least 18
            years old. If a minor under 18 submits Personal Data to ARTSPLIT and
            we learn that the Personal Data is the information of minor, we will
            delete the information as soon as possible. If you believe that we
            might have any Personal Data from a minor, please contact us by using
            the contact links or at the address indicated herein.
          </Text>

          <Text>
            It is important that you read this privacy policy together with other
            related policies including without Terms and Conditions (T&Cs), that
            ARTSPLIT may provide on specific occasions when collecting or
            processing your personal data. so that you are fully aware and consent
            on how and why we are using your personal data. This privacy policy
            supplements other notices and privacy policies and is not intended to
            override them.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Data Controller">
          <Text>
            ARTSPLIT, is the custodian and data controller and responsible for
            your personal data with regards to your engagements / business
            relationship with ARTSPLIT.
          </Text>
          
          <Text fontWeight={500} fontSize="md" mt={3}>
            Contact Details
          </Text>
          <Text>
            If you have any questions about this privacy policy or our privacy
            practices, please contact vial info@artsplit.com You have the right to
            make a complaint at any time to the regulatory authority in your
            jurisdiction for data protection issues We would, however, appreciate
            the opportunity to address your concerns before you approach the
            Authority.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Changes to the privacy policy and your duty to inform us of changes">
          <Text>
            We keep our privacy policy under regular review and notification of
            any changes will be provided for your use.
          </Text>

          <Text>
            It is important that personal data we hold about you is accurate and
            current. Please keep us informed if your personal data changes during
            your business relationship with us. In the event that we have not
            received information regarding a change of status on your personal
            data, please note that you inherently accept the responsibility for
            the information you provided and/or the failure to timely and
            accurately update your details.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Third-party links">
          <Text>
            Our Platform may include links to third-party websites, plug-ins and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do not
            control these third-party websites and are not responsible for their
            privacy statements. When you leave our Platform and/or are directed to
            any links to other sites, we encourage you to read the privacy policy
            of every website you visit.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="The data we collect about you">
          <Text>
            Personal data, or personal information, means data that allows someone
            to identify you individually, including, for example, your name, email
            address, as well as any other non-public information about you that is
            associated with or linked to any of the foregoing. “Anonymous Data”
            means data, including aggregated and de-identified data, that is not
            associated with or linked to your Personal Data; Anonymous Data does
            not, by itself, permit the identification of individual persons. We
            may collect, use, store and transfer different kinds of personal data
            about you which we have classified as follows:
          </Text>

          <UnorderedList mt={3} spacing={2}>
            <ListItem>
              Identity Data includes first name, maiden name, last name, images or
              photos, biometrics, username or similar identifier, marital status,
              title, date of birth and gender.
            </ListItem>

            <ListItem>
              Contact Data includes billing address, delivery address, email
              address and telephone numbers.
            </ListItem>

            <ListItem>
              Financial Data related to your payment method (e.g. valid credit
              card number, card brand, expiration date) that we may collect when
              you purchase our services from the Application. We store only very
              limited, if any, financial information that we collect
            </ListItem>

            <ListItem>
              Transaction Data includes details about payments to and from you and
              other details of products and services you have purchased from us.
            </ListItem>

            <ListItem>
              Technical Data includes internet protocol (IP) address, your login
              data, browser type and version, time zone setting and location,
              browser plug-in types and versions, operating system and platform,
              and other technology on the devices you use to access our Platform.
            </ListItem>

            <ListItem>
              Mobile Device Access: We may request access or permission to certain
              features from your mobile device, including your mobile device's
              Bluetooth, calendar, camera, contacts, microphone, SMS messages,
              social media accounts, files and storage, and other features. You
              can decline granting access to your mobile device by clicking on
              “disagree” “do not allow” options that may pop-up or by changing our
              access or permissions via your device's settings.
            </ListItem>

            <ListItem>
              Push Notifications: We may request to send you push notifications
              regarding your account or the Application. If you wish to opt-out
              from receiving these types of communications, you may turn them off
              in your device's settings.
            </ListItem>

            <ListItem>
              Profile Data includes your username and password, purchases or
              orders made by you, your interests, preferences, feedback and survey
              responses. Please use unique numbers, letters and special
              characters, and do not disclose your password to anyone. Please
              remember that you are responsible for all actions taken in the name
              of your account. If you lose control of your password, you may lose
              substantial control over your personal information and may be
              subject to legally binding actions taken on your behalf. Therefore,
              if your password has been compromised for any reason, you should
              immediately notify us and change your password.
            </ListItem>

            <ListItem>
              Usage Data includes information about how you use our Platforms,
              products and services.
            </ListItem>

            <ListItem>
              Marketing and Communications Data includes your preferences in
              receiving marketing from us and our third parties and your
              communication preferences.
            </ListItem>

            <ListItem>
              Contact List Information - Includes users' contact lists. ARTSPLIT
              may for the purpose of networking and connecting users upload your
              contacts to the ARTSPLIT server. Similarly, this would enable users
              to send invitations to persons on their contact list, or by manually
              entering a telephone number. We do not share this information or
              make it available to others. We will only access your contact list
              if you click on the “allow” “agree” or other consent words that may
              pop-up on your device.
            </ListItem>

            <ListItem>
              If required to help us verify your identity, you may provide us a
              copy of your driver's license, passport or other government issued
              ID. If required to help us verify your residence, you may provide us
              with a utility bill, lease or other proof of residence. You may also
              provide us other verification documents, such as bank statements
              reflecting the source of funds, to meet international anti-money
              laundering regulations, or other legal requirements. If you seek to
              invest through an entity, you may provide us with documentation
              relating to the entity's jurisdiction of formation, legal status and
              ownership. By providing the verification information and documents
              mentioned above, you also provide us information within those
              records, which may include characteristics of protected
              classifications like your sex, age, national origin, and
              citizenship.
            </ListItem>

            <ListItem>
              We also collect, use and share Aggregated Data such as statistical
              or demographic data for any purpose. Aggregated Data could be
              derived from your personal data but is not considered personal data
              in law as this data will not directly or indirectly reveal your
              identity. For example, we may aggregate your Usage Data to calculate
              the percentage of users accessing a specific feature on our
              Platform. However, if we combine or connect Aggregated Data with
              your personal data so that it can directly or indirectly identify
              you, we treat the combined data as personal data which will be used
              in accordance with this privacy policy.
            </ListItem>

            <ListItem>
              We do not collect any Special Categories of Personal Data about you
              this includes details about your race or ethnicity, religious or
              philosophical beliefs, sex life, sexual orientation, political
              opinions, trade union membership and information about your health.
              We also do not collect any information about criminal convictions
              and offences that do not pertain to the misuse or abuse of our
              platform.
            </ListItem>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="If you fail to provide personal data">
          <Text>
            For legitimate and regulatory purposes and processes, we are required
            to collect your personal data which shall undergo verification before
            you can be fully admitted and commence your business relationship with
            us. In the event that you unable to produce this information; we may
            be unable to assist you or issue you a contract which is mandatory and
            essential for onboarding all prospective clients or partners we engage
            with. Thus, leading to either rejection, cancellation or termination
            of your pending request.
          </Text>

          <Text>
            Where we need to collect personal data by law, or under the terms of a
            contract we have with you, and you fail to provide that data when
            requested, we may not be able to perform the contract we have or are
            trying to enter into with you (for example, to provide you with goods
            or services). In this case, we may have to cancel a product or service
            you have with us.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="How is your personal data collected?">
          <Text>
            We use different methods to collect data from and about you including
            through:
          </Text>

          <UnorderedList mt={3} spacing={2}>
            <ListItem>
              Direct interactions. You may give us your Identity, Contact
              including your contact and those on your contact list and Financial
              Data by filling in forms or by corresponding with us by post, phone,
              email or otherwise.
            </ListItem>

            <ListItem>
              In addition to the above we may collect the personal data you
              provide on our Platforms when you:

              <UnorderedList mt={1} spacing={1} listStyleType="circle">
                <ListItem>
                  apply for our products or services;
                </ListItem>

                <ListItem>
                  create an account on our Platforms - To register for an ARTSPLIT
                  account, you may need to do so by providing your full name and a
                  valid email address. If you have received our permission to use
                  our Services, you may need to complete an additional registration
                  process and provide additional information. If you have an ATSPLIT
                  account, you may access, add, remove or update certain information
                  about you in your profile and account settings, as indicated on
                  our Services. It is your responsibility to update all such
                  information as necessary to keep it accurate and current.
                </ListItem>

                <ListItem>
                  subscribe to our service or publications.
                </ListItem>

                <ListItem>
                  request marketing to be sent to you;
                </ListItem>

                <ListItem>
                  attend one of our in person and/or online events
                </ListItem>

                <ListItem>
                  enter a competition, promotion or survey; or
                </ListItem>

                <ListItem>
                  give us feedback or contact us.
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              Automated technologies or interactions. As you interact with our
              Platforms, we will automatically collect Technical Data about your
              equipment, browsing actions and patterns. We collect this personal
              data through:

              <UnorderedList mt={2} spacing={1} listStyleType="circle">
                <ListItem>
                  Information Collected by Our Servers - To provide our Service and
                  make it more useful to you, we (or a third-party service provider)
                  collect information from you, including, but not limited to, your
                  browser type, operating system, Internet Protocol (“IP”) address,
                  mobile device ID, wallet type, and date/time stamps.
                </ListItem>

                <ListItem>
                  Log Files. As is true of most websites and applications, we gather
                  certain information automatically and store it in log files. This
                  information includes IP addresses, browser type, Internet service
                  provider (“ISP”), referring/exit pages, operating system,
                  date/time stamps, and clickstream data. We use this information to
                  analyse trends, administer the Service, track users’ movements
                  around the Service, and better tailor our Services to our users’
                  needs.
                </ListItem>
                <ListItem>
                  When you download or use an ARTSPLIT mobile application or visit
                  our website from a mobile browser, we may obtain information about
                  your location and mobile device, including a unique identifier for
                  your device which information may be used for legitimate business
                  purposes. Along with the other purposes described in this Policy,
                  we may use this information in order to customize our Services,
                  Content and marketing for your location. Most mobile devices let
                  you disable location services, and your choices for location
                  services may vary depending on your mobile device
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              Third parties or publicly available sources.We will receive personal
              data about you from various third parties and public sources as set
              out below:

              <UnorderedList listStyleType="circle">
                <ListItem>
                  Technical Data from analytics providers; advertising networks; and
                  search information providers.
                </ListItem>

                <ListItem>
                  Identity and Contact Data from data brokers or aggregators.
                </ListItem>

                <ListItem>
                  Identity and Contact Data from publicly available sources.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="How we use your personal data">
          <Text>
            The information we collect helps us to operate, improve, protect,
            and customize our Services, as well as develop new Services. The
            information we collect also helps us provide customer support and
            make our Platform more efficient for you and other Users. For the
            sake of transparency, it is our responsibility to outline for you
            the legitimate business purposes for the collection of information
            and the reasons why we do so, in order for you to make an informed
            decision regarding the use of our Services.
          </Text>

          <Text>
            Most commonly, we will use your personal data in the following
            circumstances (these circumstances may be vary from time to time and
            we shall keep you informed where such changes may occur and/or
            affect the collection and/or use of your personal data):

            <UnorderedList mt={2} spacing={1}>
              <ListItem>
                For legitimate reasons such as contractual agreements between you
                and ARTSPLIT for business related purposes.
              </ListItem>

              <ListItem>
                For our legitimate interests (or those of a third party) and your
                interests and fundamental rights do not override those interests.
              </ListItem>

              <ListItem>
                For instances where we need to comply with legal obligations.
              </ListItem>

              <ListItem>
                Where we have obtained your consent to do so.
              </ListItem>

              <ListItem>
                Whilst we do not rely on consent as the sole legal basis for
                processing your personal data, we will obtain your consent before
                sending third party direct marketing communications to you via
                email or text message. You have the right to withdraw consent to
                marketing at any time by contacting us and the third-party
                supplier through its channels of communication.
              </ListItem>
            </UnorderedList>
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Purposes for which we will use your personal data">
          <Text>
            We have set out below, in a table format, a description of all the
            ways we plan to use your personal data, and which of the legal bases
            we rely on to do so. We have also identified what our legitimate
            interests are where appropriate.
          </Text>

          <Text my={2}>
            Note that we may process your personal data for various lawful
            grounds depending on the specific purpose for which we are using
            your data. Please contact us if you require clarification and/or
            details about the specific legal ground we are relying on to process
            your personal data where multiple/various grounds have been set out
            in the table below.
          </Text>

          <TableContainer whiteSpace="pre-wrap" my={6}>
            <Table variant="striped" colorScheme="brand" fontSize="sm">
              <Thead>
                <Tr>
                  <Th color="primary">
                    Purpose/Activity
                  </Th>
                  <Th color="primary">
                    Type of data
                  </Th>
                  <Th color="primary">
                    Lawful basis for processing including basis of legitimate
                    interest
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>To register you as a new customer</Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>Performance of a contract with you</Td>
                </Tr>

                <Tr>
                  <Td>
                    To process and deliver your order including:
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Manage payments, fees and charges
                      </ListItem>
                      <ListItem>
                        Collect and recover money owed to us
                      </ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Financial</ListItem>
                      <ListItem>Transaction</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Performance of a contract with you
                      </ListItem>
                      <ListItem>
                        Necessary for our legitimate interests (to recover debts due us)
                      </ListItem>
                    </OrderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    To manage our relationship with you which will include:
                    
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Notifying you about changes to our terms or privacy policy
                      </ListItem>
                      <ListItem>
                        Asking you to leave a review or take a survey
                      </ListItem>
                      <ListItem>Financial</ListItem>
                      <ListItem>Transaction</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Profile</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Performance of a contract with you
                      </ListItem>
                      <ListItem>
                        Necessary to comply with a legal obligation
                      </ListItem>
                      <ListItem>
                        Necessary for our legitimate interests (to keep our
                        records updated and to study how customers use our
                        products/services)
                      </ListItem>
                      <ListItem>
                        Necessary for delivering and enhancing the services we offer you
                      </ListItem>
                    </OrderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    To enable you to partake in a prize draw, competition or
                    complete a survey
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Profile</ListItem>
                      <ListItem>Usage</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Performance of a contract with you
                      </ListItem>
                      <ListItem>
                        Necessary for our legitimate interests (to study how
                        customers use our products/services, to develop them and grow
                        our business)
                      </ListItem>
                    </OrderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    To administer and protect our business and Platforms (including
                    troubleshooting, data analysis, testing, system maintenance,
                    support, reporting and hosting of data)
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Technical</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        Necessary for our legitimate interests (for running our
                        business, provision of administration and IT services, network
                        security, to prevent fraud and in the context of a business
                        reorganisation or group restructuring exercise)
                      </ListItem>
                      <ListItem>
                        Necessary to comply with a legal obligation
                      </ListItem>
                    </OrderedList>
                  </Td>
                </Tr>
                
                <Tr>
                  <Td>
                    To deliver relevant content and advertisements to you and
                    measure or understand the effectiveness of the advertising we
                    serve to you
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Profile</ListItem>
                      <ListItem>Usage</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    Necessary for our legitimate interests (to study how customers
                    use our products/services, to develop them, to grow our business
                    and to inform our marketing strategy)
                  </Td>
                </Tr>

                <Tr>
                  <Td>Contact List (Connect Contacts)</Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>
                        To enable you to invite your contacts to join the ARTSPLIT
                        platform and for those contacts to receive invitations.
                      </ListItem>
                      <ListItem>
                        To enable you connect and network with other ARTSPLIT
                        users that you already know.{" "}
                      </ListItem>
                      <ListItem>
                        Enhancing user experience
                      </ListItem>
                    </OrderedList>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    To use data analytics to improve our Platforms,
                    products/services, marketing, customer relationships and
                    experiences
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Technical</ListItem>
                      <ListItem>Usage</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    Necessary for our legitimate interests (to define types of
                    customers for our products and services, to keep our Platforms
                    updated and relevant, to develop our business and to inform our
                    marketing strategy)
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    To make suggestions and recommendations to you about goods or
                    services that may be of interest to you
                  </Td>
                  <Td>
                    <OrderedList spacing={2} listStyleType="lower-alpha">
                      <ListItem>Identity</ListItem>
                      <ListItem>Contact</ListItem>
                      <ListItem>Profile</ListItem>
                      <ListItem>Usage</ListItem>
                      <ListItem>Marketing and Communications</ListItem>
                    </OrderedList>
                  </Td>
                  <Td>
                    Necessary for our legitimate interests (to develop our
                    products/services and grow our business)
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </LegalContentItem>

        <LegalContentItem title="Marketing">
          <Text>
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising. We have
            established the following personal data control mechanisms:
          </Text>

          <UnorderedList>
            <ListItem>
              <Text fontWeight={500}>
                Promotional offers from us
              </Text>
              <Text>
                We may use your Identity, Contact, Technical, Usage and Profile
                Data to form a view on what we think you may want or need, or what
                may be of interest to you. This is how we decide which products,
                services and offers may be relevant for you. You will receive
                marketing communications from us if you have requested information
                from us or purchased [goods or services] from us and you have not
                opted out of receiving that marketing.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight={500}>
                Third-party marketing
              </Text>
              <Text>
                We will get your express opt-in consent before we share your
                personal data with any third party for marketing purposes.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight={500}>
                Opting out
              </Text>
              <Text>
                You can ask us or third parties to stop sending you marketing
                messages at any time by logging onto the Platforms and checking or
                unchecking relevant boxes to adjust your marketing preferences or
                by following the opt-out links on any marketing message sent to
                you.
              </Text>

              <Text>
                Where you opt out of receiving these marketing messages, this will
                not apply to personal data provided to us as a result of a
                product/service purchase, warranty registration, product/service
                experience or other transactions.
              </Text>
            </ListItem>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="Communication Preference">
          <Text>
            We provide registered Users with settings on our Services to control
            whether they receive certain communications from us. If you do not
            want to receive marketing email from us, you can unsubscribe by
            following the unsubscribe link in the email you received, changing
            your preferences in your profile and account settings (if you have
            registered for an ARTSPLIT account). You may not be able to opt out of
            receiving some communications from us, such as email about your
            account, your relationship with us, or your transactions with us or
            other Users. Please note that unsubscribing from receiving emails from
            us may result in a less robust experience of our Services
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Change of purpose">
          <VStack align="stretch" gap={2}>
            <Text>  
              We will only use your personal data for the purposes for which we
              collected it, unless we reasonably consider that we need to use it for
              another reason and that reason is compatible with the original
              purpose. If you wish to get an explanation as to how the processing
              for the new purpose is compatible with the original purpose, please
              contact us.
            </Text>

            <Text>
              If we need to use your personal data for an unrelated purpose, we will
              notify you and we will explain the legal basis which allows us to do
              so.
            </Text>

            <Text>
              Please note that we may process your personal data without your
              knowledge or consent, in compliance with the above rules, where this
              is required or permitted by law.
            </Text>
          </VStack>
        </LegalContentItem>

        <LegalContentItem title="Disclosures of your personal data">
          <Text>
            We may share your personal data with the parties set out below for the
            purposes set out in the table (Purposes for which we will use your
            personal data) above.
          </Text>

          <UnorderedList>
            <ListItem>
              Internal Third Parties
            </ListItem>
            <ListItem>
              External Third Parties
            </ListItem>
            <ListItem>
              Specific third parties listed in the table (Purposes for which we
              will use your personal data) above.
            </ListItem>
            <ListItem>
              Third parties to whom we may choose to sell, transfer or merge parts
              of our business or our assets. Alternatively, we may seek to acquire
              other businesses or merge with them. If a change happens to our
              business, then the new owners may use your personal data in the same
              way as set out in this privacy policy.
            </ListItem>
            <ListItem>
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do not
              allow our third-party service providers to use your personal data
              for their own purposes and only permit them to process your personal
              data for specified purposes and in accordance with our instructions.
            </ListItem>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="International Processing">
          <Text>
            Our Users (including the galleries and other organizations that use
            our Services as exhibitors, buyers or sellers), service providers, and
            other third parties you may interact with in connection with our
            Services, may be located in any country, including countries that may
            not offer adequate level of protection for Personal Information. By
            accessing or using our Services, you agree that your information may
            be transferred and processed in any country or jurisdiction.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Data Security">
          <Text>
            Every ARTSPLIT account is protected by a password to help maintain
            privacy and security on our Services. If you register for an account,
            we urge you to use a strong password containing unique numbers,
            letters and special characters, and to protect the confidentiality of
            your password at all times. If you suspect or become aware of any
            unauthorized access to or use of your account or password, you agree
            to immediately notify us and change your password. We have put in
            place appropriate security measures to prevent your personal data from
            being accidentally lost, used or accessed in an unauthorised way,
            altered or disclosed. However, please note that while we seek to
            protect your information and maintain the security of our Services,
            due to the possibility of hardware or software failure, unauthorized
            entry or use and other factors, we cannot guarantee the security of
            any information, whether online or offline. Any transmission of
            information is at your own risk. Please also note that any information
            you provide to us is unencrypted.
          </Text>
        </LegalContentItem>

        <LegalContentItem title="Data Retention">
          <UnorderedList>
            <ListItem>
              We will only retain your personal data for as long as reasonably
              necessary to fulfil the purposes we collected it for, including for
              the purposes of satisfying any legal, regulatory, tax, accounting or
              reporting requirements. We may retain your personal data for a
              longer period in the event of a complaint or if we reasonably
              believe there is a prospect of litigation in respect to our
              relationship with you.
            </ListItem>

            <ListItem>
              To determine the appropriate retention period for personal data, we
              consider the amount, nature and sensitivity of the personal data,
              the potential risk of harm from unauthorised use or disclosure of
              your personal data, the purposes for which we process your personal
              data and whether we can achieve those purposes through other means,
              and the applicable legal, regulatory, tax, accounting or other
              requirements.
            </ListItem>

            <ListItem>
              In some circumstances we will anonymise your personal data (so that
              it can no longer be associated with you) for research or statistical
              purposes, in which case we may use this information indefinitely
              without further notice to you.
            </ListItem>

            <ListItem>
              In some circumstances you can ask us to delete your data: see (your
              legal rights) below for further information.
            </ListItem>

            <ListItem>
              In some circumstances we will anonymise your personal data (so that
              it can no longer be associated with you) for research or statistical
              purposes, in which case we may use this information indefinitely
              without further notice to you.
            </ListItem>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="User Communications">
          <VStack align="stretch" gap={2}>
            <Text>
              <strong>Connecting with Other Users</strong>: We aim to provide a
              platform and marketplace where Users can discover and engage with a
              wide range of artwork, design and other items from around the world,
              including items from the various galleries, institutions and others
              that use our Services as exhibitors or sellers. To help make this
              happen, our Services may include features, such as messaging tools and
              email addresses hosted on our Services, that enable you to contact and
              communicate with other Users. For example, when an auction house,
              gallery, or other seller lists an artwork or other item on our
              Platform, our Platform may enable you to contact them about that item
              or about other items they may have available.
            </Text>

            <Text>
              <strong>Sharing Information with Other Users</strong>: When you use
              our Services to contact another User or perform a transaction with
              another User, such as an auction house, gallery, or institution, they
              may obtain your name, email address and (as applicable) other contact
              information from us to facilitate communications, transactions, or for
              their marketing purposes. Sometimes such Users may be able to obtain
              additional information about you when you use our Services to contact
              them or perform a transaction with them. For example, they may be able
              to obtain information about your location, interests and other
              information, as indicated by us in connection with these Services, or
              as otherwise indicated in your profile and account settings. Our
              Services may include settings that enable you to choose how certain
              information is shared with other Users when you contact them or
              perform a transaction with them, as indicated when you use these
              Services or in your profile and account settings.
            </Text>
          </VStack>
        </LegalContentItem>

        <LegalContentItem title="Your legal rights">
          <UnorderedList>
            <ListItem>
              Request access to your personal data (commonly known as a `data
              subject access request`). This enables you to receive a copy of the
              personal data we hold about you and to check that we are lawfully
              processing it.
            </ListItem>

            <ListItem>
              Request correction of the personal data that we hold about you. This
              enables you to have any incomplete or inaccurate data we hold about
              you corrected, though we may need to verify the accuracy of the new
              data you provide to us.
            </ListItem>

            <ListItem>
              Request erasure of your personal data - If you wish to cancel your
              account, you may do so by using the tools provided in your profile
              and account settings, subject to any other agreements between you
              and us and any transactions which have not yet been completed. If
              you terminate your account, we may keep a record of any or all
              information associated with you or your account, as required or
              permitted by law, for purposes consistent with this Policy. Specific
              account data that includes Personal Information including your name,
              e-mail, contact information, and certain other records such as
              settings and profiles will be removed at such termination. You may
              ask us to delete or remove personal data where there is no good
              reason for us continuing to process it. You also have the right to
              ask us to delete or remove your personal data where you have
              successfully exercised your right to object to processing, where we
              may have processed your information unlawfully or where we are
              required to erase your personal data to comply with local law. Note,
              however, that we may not always be able to comply with your request
              of erasure for specific legal reasons which will be notified to you,
              if applicable, at the time of your request.
            </ListItem>

            <ListItem>
              Object to processing of your personal data where we are relying on a
              legitimate interest (or those of a third party) and there is
              something about your particular situation which makes you want to
              object to processing on this ground as you feel it impacts on your
              fundamental rights and freedoms. You also have the right to object
              where we are processing your personal data for direct marketing
              purposes. In some cases, we may demonstrate that we have compelling
              legitimate grounds to process your information which override your
              rights and freedoms.
            </ListItem>

            <ListItem>
              Request restriction of processing of your personal data. This
              enables you to ask us to suspend the processing of your personal
              data in the following scenarios:

              <UnorderedList listStyleType="circle">
                <ListItem>
                  If you want us to establish the data`s accuracy.
                </ListItem>
                <ListItem>
                  Where our use of the data is unlawful but you do not want us to
                  erase it.
                </ListItem>
                <ListItem>
                  Where you need us to hold the data even if we no longer require it
                  as you need it to establish, exercise or defend legal claims.
                </ListItem>
                <ListItem>
                  You have objected to our use of your data but we need to verify
                  whether we have overriding legitimate grounds to use it.
                </ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem>
              Request the transfer of your personal data to you or to a third
              party. We will provide to you, or a third party you have chosen,
              your personal data in a structured, commonly used, machine-readable
              format. Note that this right only applies to automated information
              which you initially provided consent for us to use or where we used
              the information to perform a contract with you.
            </ListItem>

            <ListItem>
              Withdraw consent at any timewhere we are relying on consent to
              process your personal data. However, this will not affect the
              lawfulness of any processing carried out before you withdraw your
              consent. If you withdraw your consent, we may not be able to
              provide certain products or services to you. We will advise you if
              this is the case at the time you withdraw your consent.
            </ListItem>

            <VStack gap={3} mt={4}>
              <Box>
                <Heading fontSize="lg" fontWeight={500} mb={1}>
                  No fee usually required
                </Heading>
                <Text>
                  You will not have to pay a fee to access your personal data (or to
                  exercise any of the other rights). However, we may charge a
                  reasonable fee if your request is clearly unfounded, repetitive or
                  excessive. Alternatively, we could refuse to comply with your
                  request in these circumstances.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight={500} mb={1}>
                  What we may need from you
                </Heading>
                <Text>
                  We may need to request specific information from you to help us
                  confirm your identity and ensure your right to access your personal
                  data (or to exercise any of your other rights). This is a security
                  measure to ensure that personal data is not disclosed to any person
                  who has no right to receive it. We may also contact you to ask you
                  for further information in relation to your request to speed up our
                  response.
                </Text>
              </Box>

              <Box>
                <Heading fontSize="lg" fontWeight={500} mb={1}>
                  Time limit to respond
                </Heading>
                <Text>
                  We try to respond to all legitimate requests within one month.
                  Occasionally it could take us longer than a month if your request is
                  particularly complex or you have made a number of requests. In this
                  case, we will notify you and keep you updated.
                </Text>
              </Box>
            </VStack>
          </UnorderedList>
        </LegalContentItem>

        <LegalContentItem title="Changes to this Privacy Policy">
          <Text>
            Our business changes with time, and our Privacy Policy will change
            also. We reserve the right to change this Policy, including without
            prior notice, at any time at our sole discretion. For example, and
            without limitation, we may change this Policy to reflect changes to
            the law or changes to our Services. All changes to this Policy will be
            effective when posted on our Platform, or at such later date as may be
            specified in the updated Policy. We will notify you of any changes to
            this Policy by posting the updated Policy, and you agree to review
            this Policy regularly and inform yourself of all applicable changes.
            By continuing to use our Services after any changes to this Policy
            become effective, you agree to such changes and the updated Policy.
            Unless we notify you otherwise, the current version of this Policy
            will apply to all information that we have about you or your account
          </Text>
        </LegalContentItem>

        <Heading fontSize="xl" textAlign="center" fontWeight={500} lineHeight={1.6}>
          This Policy is effective as of June 1, 2022 and will remain in effect
          subject to any changes or amendments to its provisions.
        </Heading>
      </LegalContent>
    </PageLayout>
  );
};

export default PrivacyPolicy;
