import React from 'react';
import { Container } from 'semantic-ui-react';
import Layout from '../layouts/website.jsx';

const bannerStyle = {
    backgroundImage  : 'url(\'https://media.istockphoto.com/id/1171963952/video/camera-moves-right-along-modern-light-loft-office-multiethnic-business-people-working-at.mp4?s=mp4-640x640-is&k=20&c=PY_cVqD9exYbxxk1EhdZd-4C4-XYF85NQkkHkgjNfwY=\')',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'center',
    backgroundSize   : 'cover',
    paddingTop : '100px',
    paddingBottom : '300px'
};

const banner = (
    <Container fluid textAlign="center" style={bannerStyle}>
        <h1>CodePatch</h1>
        <p>Where developers grow</p>
    </Container>
);

const Index = () => {
    return (
        <Layout banner={banner}>
            <p>Developer training and consulting</p>
            <p>We make it easy to build apps by teaching you to code or training you on the best tools for your new project.</p>
            <p>Any skill level, from basic to advanced. We will help you make your idea a reality. </p>
        </Layout>
    );
};

export default Index;
