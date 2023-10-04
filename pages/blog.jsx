import Link from 'next/link';
import Layout from '../layout/website.jsx';

const PostLink = ({ post }) => (
    <li>
        <Link as={`/blog/${post.id}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 0.5rem 0;
            }
        `}</style>
    </li>
);
const Blog = (props) => (
    <Layout>
        <h1>Blog</h1>
        <p>News and articles from our trainers and students</p>
        <ul>
            {props.posts.map((post) => {
                return <PostLink key={post.id} post={post} />
            })}
        </ul>
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
