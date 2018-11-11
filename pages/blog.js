import Layout from '../layout/website';
import Link from 'next/link';

const PostLink = ({ post }) => (
    <li>
        <Link as={`/blog/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
        </Link>
    </li>
);
const Blog = (props) => (
    <Layout>
        <h1>Codepatch Blog</h1>
        <ul>
            {props.posts.map((post) => {
                return <PostLink key={post.id} post={post} />
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
    
    return { posts };
};

export default Blog;
