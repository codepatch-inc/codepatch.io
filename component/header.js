import Link from 'next/link';

const Header = () => (
    <header>
        <Link href="/"><a>Home</a></Link>
        <Link href="/training"><a>Training</a></Link>
        <Link href="/consulting"><a>Consulting</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <style jsx>{`
            a {
                margin-right: 2em;
            }
        `}</style>
    </header>
);

export default Header;
