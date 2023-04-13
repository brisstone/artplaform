import { Heading, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react"
import LegalContent from "components/LegalContent"
import LegalContentItem from "components/LegalContentItem"
import PageLayout from "layouts/PageLayout"

const UsePolicyPage = () => {
    return (
        <PageLayout title="Use Policy">
            <LegalContent title="Use Policy" listStyleType="none" listStylePosition="outside" m={0}>
                <Heading fontWeight={500} fontSize="xl" mb={6} color="primary">
                    Please read the terms of this policy carefully before using the site
                </Heading>

                <LegalContentItem title="What's In These Terms?">
                    <Text>
                        Welcome to the ARTSPLIT's (collectively referred to as "ARTSPLIT",
                        "we", "us" or "our") privacy policy.
                        References to “you”, “your” or “user” shall mean the users of our site whilst
                        the site includes the ARTSPLIT website www.artsplit.com and mobile software application.
                        This acceptable use policy (the policy) sets out the terms between you and us under
                        which you may access our site, and sets out the content standards that apply when you
                        upload content to our site, make contact with other users on our site, link to our site,
                        or interact with our site in any other way. Lastly, this policy regulates how you interact with
                        customer satisfaction representatives from time to time
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Who We Are And How to Contact Us">
                    <Text>
                        The site is operated by ARTSPLIT Limited. You can contact us using the details provided below:

                        <UnorderedList>
                            <ListItem>
                                Email address: Info@artsplit.com Postal
                            </ListItem>
                            <ListItem>
                                Address: 11 Bank road, Ikoyi, Lagos Telephone number: +234 908 896 2169
                            </ListItem>
                        </UnorderedList>
                    </Text>
                </LegalContentItem>
                
                <LegalContentItem title="By Using Our Site, You Accept These Terms">
                    <Text>
                        By using our site, you confirm that you accept the terms of this policy and that
                        you agree to comply with them. If you do not agree to these terms, you must not use our site.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="There Are Other Terms That May Apply To You">
                    <Text>
                        Our Terms and Conditions provided here and Privacy Policy
                        provided here also apply to your use of our site.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="We May Make Changes To The Terms of This Policy">
                    <Text>
                        We amend these terms from time to time. Every time you wish to use our site,
                        please check these terms to ensure you understand the terms that apply at that time.
                        These terms were most recently updated in February 2022.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Accessing Our Site">
                    <Text>
                        Accessing our site is free of charge. We cannot guarantee that it will always be
                        available or be uninterrupted. We may suspend, restrict, withdraw, or
                        change any part of our site without notice.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Intellectual Property Rights">
                    <Text>
                        We own (or are licenced to use) all of the intellectual
                        property rights in our site, and in the content published on them.
                        All such rights are reserved.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Prohibited Uses">
                    <Text>
                        You may use our site only for lawful purposes.
                        You shall not use our site:

                        <OrderedList>
                            <ListItem>
                                In any way that breaches any applicable local, national, or
                                international law or regulation.
                            </ListItem>

                            <ListItem>
                                In any way that is unlawful or fraudulent or has any
                                unlawful or fraudulent purpose or effect.
                            </ListItem>

                            <ListItem>
                                For the purpose of harming or attempting to harm minors in any way.
                            </ListItem>

                            <ListItem>
                                To bully, insult, intimidate or humiliate any person including our
                                designated customer satisfaction representatives
                            </ListItem>

                            <ListItem>
                                To send, knowingly receive, upload, download, use or re-use any material
                                which does not comply with our content standards.
                            </ListItem>

                            <ListItem>
                                To transmit, or procure the sending of, any unsolicited or unauthorised
                                advertising or promotional material or any other form of similar
                                solicitation (spam).
                            </ListItem>

                            <ListItem>
                                To knowingly transmit any data, send or upload any material that contains
                                viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware,
                                adware or any other harmful programs or similar computer code designed to
                                adversely affect the operation of any computer software or hardware.
                            </ListItem>

                            <ListItem>
                                To reproduce, duplicate, copy or re-sell any part of our site in contravention
                                of the provisions of our Terms and Conditions of Website Use.
                            </ListItem>

                            <ListItem>
                                To access without authority, interfere with, damage or disrupt:

                                <OrderedList listStyleType="upper-roman">
                                    <ListItem>
                                        any part of our site;
                                    </ListItem>

                                    <ListItem>
                                        any equipment or network on which our site is stored;
                                    </ListItem>
                                    
                                    <ListItem>
                                        any software used in the provision of our site; or
                                    </ListItem>
                                    
                                    <ListItem>
                                        any equipment or network or software owned or used by any third party.
                                    </ListItem>
                                </OrderedList>
                            </ListItem>

                        </OrderedList>
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Interactive Services">
                    <OrderedList>
                        <ListItem>
                            We may from time to time provide interactive services on our
                            site which allow you interact with other users (“interactive services”).
                        </ListItem>

                        <ListItem>
                            Where we do provide any interactive service, its use may be moderated by us.
                        </ListItem>

                        <ListItem>
                            We shall do our best to assess any possible risks for users from third parties
                            when they use any interactive service provided on our site, and we will decide
                            in each case whether it is appropriate to use moderation of the relevant service
                            (including what kind of moderation to use) in the light of those risks.
                            However, we are under no obligation to oversee, monitor or moderate any
                            interactive service we provide on our site, and we expressly exclude our liability
                            for any loss or damage arising from the use of any interactive service by a user
                            in contravention of our content standards, whether the service is moderated or not.
                        </ListItem>

                        <ListItem>
                            Minors are not permitted to use our site.
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Content Standards">
                    <OrderedList>
                        <ListItem>
                            Our website contains content that is for general information only and is not
                            intended to be advice to you. We make reasonable efforts to update the content on our site,
                            however they may be out of date at any given time. We are under no obligation to update
                            our content and we make no representations, warranties or guarantees that the content
                            on our site is accurate, complete or up to date.
                        </ListItem>
                        <ListItem>
                            Also, kindly note that we do not accept responsibility, in any manner or form,
                            for content posted by other users on the site. We do not guarantee that our site
                            or any content therein shall be free from errors or omissions. Additionally, we do
                            not guarantee that our site shall be secure or free from bugs or viruses.
                            We recommend that you use your own virus protection software whenever you make use of our site.
                        </ListItem>
                        <ListItem>
                            <Text mb={2}>
                                These content standards apply to any and all material which you contribute to our site
                                (Contribution), and to any interactive services associated with it. The standards apply
                                to each part of any Contribution as well as to its whole.
                            </Text>

                            <Text>
                                ARTSPLIT shall determine, in its discretion, whether a Contribution breaches the Content Standards.
                            </Text>

                            <OrderedList listStyleType="upper-alpha">
                                <ListItem>
                                    A Contribution must:

                                    <OrderedList listStyleType="upper-roman">
                                        <ListItem>
                                            Be accurate (where it states facts).
                                        </ListItem>

                                        <ListItem>
                                            Be genuinely held (where it states opinions).
                                        </ListItem>

                                        <ListItem>
                                            Comply with the law applicable in England and Wales and in
                                            any country from which it is posted.
                                        </ListItem>
                                    </OrderedList>
                                </ListItem>

                                <ListItem>
                                    A Contribution must not:

                                    <OrderedList>
                                        <ListItem>
                                            Be defamatory of any person.
                                        </ListItem>

                                        <ListItem>
                                            Be obscene, offensive, hateful or inflammatory.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Bully, insult, intimidate or humiliate.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Promote sexually explicit material.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Include child sexual abuse material.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Promote violence.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Promote discrimination and/or any form bias based on race, sex, religion,
                                            nationality, disability, sexual orientation or age.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Infringe any copyright, database right or trademark of any other person.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Be likely to deceive any person.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Breach any legal duty owed to a third party, such as a contractual
                                            duty or a duty of confidence.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Promote any illegal content or activity.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Be in contempt of court.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Be threatening, abuse or invade another&quote;s privacy,
                                            or cause annoyance, inconvenience or needless anxiety
                                        </ListItem>
                                        
                                        <ListItem>
                                            Be likely to harass, upset, embarrass, alarm or annoy any other person.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Impersonate any person or misrepresent your identity or
                                            affiliation with any person.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Give the impression that the Contribution emanates from
                                            ARTSPLIT Limited, if this is not the case.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Advocate, promote, incite any party to commit, or assist any unlawful
                                            or criminal act such as (by way of example only) copyright infringement
                                            or computer misuse.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Contain a statement which you know or believe, or have reasonable
                                            grounds for believing, that members of the public to whom the statement is,
                                            or is to be, published are likely to understand as a direct or indirect encouragement
                                            or other inducement to the commission, preparation or instigation of acts of terrorism.
                                        </ListItem>
                                        
                                        <ListItem>
                                            Contain any advertising or promote any services or web links to other sites.
                                        </ListItem>
                                    </OrderedList>
                                </ListItem>
                            </OrderedList>
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="Breach Of This Policy">
                    <OrderedList>
                        <ListItem>
                            When we consider that a breach of this acceptable use policy has occurred,
                            we may take such action as we deem appropriate.
                            Failure to comply with this acceptable use policy constitutes
                            a material breach of the Terms and Conditions upon which you are
                            permitted to use our site, and may result in our taking all or
                            any of the following actions:

                            <OrderedList
                                listStyleType="upper-alpha"
                                listStylePosition="inside"
                                spacing={1}
                            >
                                <ListItem>
                                    Immediate, temporary or permanent withdrawal of your
                                    right to use our site.
                                </ListItem>

                                <ListItem>
                                    Immediate, temporary or permanent removal of any Contribution
                                    uploaded by you to our site.
                                </ListItem>

                                <ListItem>
                                    Issue of a warning to you.
                                </ListItem>

                                <ListItem>
                                    Legal proceedings against you for reimbursement of all costs on an indemnity basis
                                    (including, but not limited to, reasonable administrative and legal costs)
                                    resulting from the breach
                                </ListItem>

                                <ListItem>
                                    Further legal action against you.
                                </ListItem>

                                <ListItem>
                                    Disclosure of such information to law enforcement authorities as we
                                    reasonably feel is necessary or as required by law.
                                </ListItem>
                            </OrderedList>
                        </ListItem>
                        <ListItem>
                            We exclude our liability for all action we may take in response
                            to breaches of this acceptable use policy. The actions we may
                            take are not limited to those described above, and we may take
                            any other action we reasonably deem appropriate.
                        </ListItem>
                    </OrderedList>
                </LegalContentItem>

                <LegalContentItem title="How This Contract Can Be Transferred">
                    <Text>
                        We can transfer our rights and obligations under these terms
                        to any third-party, provided this does not adversely affect
                        your rights under these terms.
                    </Text>
                </LegalContentItem>

                <LegalContentItem title="Which Country's Laws Apply To Any Disputes?">
                    <Text>
                        Please note that the terms of this policy, its subject matter and its
                        formation are governed by the laws of England and Wales. Where
                        there are any disputes arising therefrom the dispute resolution provisions
                        contained in the Terms and Conditions shall apply.
                    </Text>
                </LegalContentItem>
            </LegalContent>
        </PageLayout>
    )
}

export default UsePolicyPage