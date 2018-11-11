import Header from '../component/header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <footer>© 2018-{(new Date()).getUTCFullYear()} Codepatch</footer>
    </div>
);

export default Layout;
