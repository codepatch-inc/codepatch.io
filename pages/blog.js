import Layout from '../layout/website';
import Link from 'next/link';

const PostLink = (props) => (
    <li>
        <Link as={`/blog/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);
const Blog = (props) => (
    <Layout>
        <h1>Codepatch Blog</h1>
        <ul>
            {props.posts.map((post) => {
                return <PostLink id={post.id} key={post.id} title={post.title} />
            })}
        </ul>
        <style jsx>{`
            h1, a {
                font-family: "Lato", sans-serif;
            }
            ul {
                padding: 0;
                list-style: none;
            }
            li {
                margin: 200px 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
);
Blog.getInitialProps = async () => {
    // Could fetch data from database here:
    const posts = [
        {
            id    : 'intro',
            title : 'Introducing Codepatch'
        },
        {
            id    : 'new-courses',
            title : 'Our New Courses'
        },
        {
            id    : 'advanced-react',
            title : 'Creating a Cutting Edge App'
        }
    ];
    console.log('returning posts');
    return {
        posts
    };
};

export default Blog;
