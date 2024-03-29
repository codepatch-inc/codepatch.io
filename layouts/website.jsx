import React from 'react';
import Head from 'next/head';
import { Container, Segment } from 'semantic-ui-react';
import Header from '../components/header.jsx';

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>CodePatch - Where developers grow</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,300italic" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
            </Head>
            <Header banner={props.banner} />
            <Segment basic padded as="main">
                <Container content={props.children} />
            </Segment>
            <Segment basic inverted padded secondary as="footer">
                <Container>
                    © {(new Date()).getUTCFullYear()} CodePatch, Inc.
                </Container>
            </Segment>
            <style jsx global>
                {
                    `
                    #__next {
                        display: grid;
                        grid-template-rows: auto 1fr;
                        min-height: 100dvh;
                    }
                    `
                }
            </style>
        </>
    );
};

export default Layout;
