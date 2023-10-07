import React from 'react';
import { Container, Divider, Header, List } from 'semantic-ui-react';
import Layout from '../layouts/website.jsx';

const bannerStyle = {
    paddingTop    : '10rem',
    paddingBottom : '10rem'
};

const banner = (
    <Container fluid textAlign="center" style={bannerStyle}>
        <Header
            inverted
            as="h1"
            color="green"
            content="CodePatch"
            subheader="Where developers grow"
        />
    </Container>
);

const Index = () => {
    return (
        <Layout banner={banner}>
            <Header as="h2" icon="universal access" content="Developer Training" />
            <p>Get started with the basics or accelerate your career growth with advanced lessons.</p>
            <p>We provide lessons for individuals or large groups.</p>
            <Header as="h2" icon="comments outline" content="Consulting" />
            <p>Build your team and ideal solutions for your business.</p>
            <p></p>
            <Divider horizontal content="Any project, any time" />
            <p>We make it easy to build apps by teaching you to code or training you on the best tools for your new project.</p>
            <p>Any skill level, from basic to advanced. We will help you make your idea a reality. </p>
            <Header content="We will help you:" />
            <List
                bulleted
                items={[
                    'Craft your ideal tech stack',
                    'Scaffold new projects and create prototypes',
                    'Design new architectures',
                    'Find, screen, and interview developers',
                    'Build, manage, and train your team',
                    'Host or run a hackathon'
                ]}
            />
        </Layout>
    );
};

export default Index;
