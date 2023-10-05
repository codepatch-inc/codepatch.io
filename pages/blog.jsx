import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/website.jsx';

const PostLink = ({ post }) => {
    return (
        <li>
            <Link as={`/blog/${post.id}`} href={`/post?id=${post.id}`}>
                {post.title}
            </Link>
        </li>
    );
};
const Blog = (props) => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>News and articles from our trainers and students</p>
            <ul>
                {props.posts.map((post) => {
                    return <PostLink key={post.id} post={post} />;
                })}
            </ul>
        </Layout>
    );
};

Blog.getInitialProps = async () => {
    // Could fetch data from database here:
    const posts = [
        {
            id    : 'intro',
            title : 'Introducing CodePatch'
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
