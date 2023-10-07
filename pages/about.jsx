import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import Layout from '../layouts/website.jsx';

const About = () => {
    return (
        <Layout>
            <Header as="h1" content="About CodePatch" />
            <p>We are a team of developers, designers, and business experts who collaborate on community education and solving problems.</p>
            <p>Our goal is to give you the tools and skills you need to build your career or business with elegant and reliable software, as well as a deep understanding of how to manage it effectively for the long term.</p>
            <Header as="h2" content="Our Team" />
            <Card.Group>
                <Card
                    image=""
                    header="Seth Holladay"
                    meta="Lead Instructor"
                    description="Seth is an engineer with a focus on web development and o Co-Founder of CodePatch"
                />
                <Card
                    image=""
                    header="Morgan Toll Hallion"
                    meta="Assistant Instructor"
                    description="Morgan is a sociologist and Co-Founder of CodePatch"
                />
            </Card.Group>
        </Layout>
    );
};

export default About;
