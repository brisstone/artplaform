import * as React from 'react';
import Head from "next/head";

export interface SeoProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = (props) => {
    const {
        title = 'ARTSPLIT',
        description = 'Where Art meets Technology',
        children = <></>
    } = props

    return (
        <Head>
            <title>{ `${title} — ARTSPLIT` }</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            { children }
        </Head>
    )
}

export default Seo;