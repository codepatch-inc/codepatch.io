import Head from 'next/head';
import Header from '../component/header';

const Layout = (props) => (
    <>
        <Head>
            <title>Codepatch - Where developers grow</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/6.0.0/sanitize.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
        </Head>
        <Header />
        {props.children}
        <footer>© 2018-{(new Date()).getUTCFullYear()} Codepatch</footer>
        <style jsx>{`
            div {
                margin: 1em;
                padding: 1em;
                border: 1px solid #DDD;
            }
        `}</style>
        <style jsx global>{`
            :root {
                font-family: "Lato", sans-serif;
                font-size: 20px;
            }
            ul {
                padding: 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </>
);

export default Layout;
