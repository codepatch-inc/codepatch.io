import React from 'react';
import Link from 'next/link';
import { Header, List } from 'semantic-ui-react';
import Layout from '../layouts/website.jsx';

const PostLink = ({ post }) => {
    return (
        <Link as={`/blog/${post.id}`} href={`/post?id=${post.id}`}>
            {post.title}
        </Link>
    );
};

const Blog = (props) => {
    return (
        <Layout>
            <Header as="h1" content="Blog" />
            <p>Check back soon!</p>
            {/* <List
                bulleted
                items={props.posts.map((post) => {
                    return {
                        key     : post.id,
                        content : <PostLink post={post} />
                    };
                })}
            /> */}
        </Layout>
    );
};

// Blog.getInitialProps = async () => {
//     // Could fetch data from database here:
//     const posts = [
//         {
//             id    : 'intro',
//             title : 'Introducing CodePatch'
//         },
//         {
//             id    : 'new-courses',
//             title : 'Our New Courses'
//         },
//         {
//             id    : 'advanced-react',
//             title : 'Creating a Cutting Edge App'
//         }
//     ];

//     return { posts };
// };

export default Blog;
