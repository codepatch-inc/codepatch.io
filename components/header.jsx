import Link from 'next/link';
import { Component } from 'react';
import { Menu } from 'semantic-ui-react';

const pages = [
    'home',
    'training',
    'consulting',
    'about',
    'blog'
];

class NavBar extends Component {
    state = { activeItem : 'home' };
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }
    render() {
        const { activeItem } = this.state
        const items = pages.map((pageName) => {
            return (
                <Link key={pageName} href={pageName === 'home' ? '/' : pageName}><a><Menu.Item
                    name={pageName}
                    active={activeItem === pageName}
                    onClick={this.handleItemClick}
                /></a></Link>
            );
        });
        return (
            <Menu pointing secondary>
                {items}
            </Menu>
        );
    }
}

const Header = () => (
    <header>
        <NavBar />
    </header>
);

export default Header;
