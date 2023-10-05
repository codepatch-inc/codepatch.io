import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { Container, Menu, Segment } from 'semantic-ui-react';

const pages = [
    'home',
    'training',
    'consulting',
    'about',
    'blog'
];

const Header = (props) => {
    const router = useRouter();
    const activePage = router.pathname.split('/')[1] || 'home';

    const items = pages.map((pageName) => {
        return {
            as     : Link,
            key    : pageName,
            active : pageName === activePage,
            href   : pageName === 'home' ? '/' : pageName,
            name   : pageName
        };
    });

    return (
        <Segment basic inverted padded="vertical" as="header">
            <Container>
                <Menu
                    inverted
                    pointing
                    secondary
                    as="nav"
                    items={items}
                />
            </Container>
            {props.banner}
        </Segment>
    );
};

export default Header;
