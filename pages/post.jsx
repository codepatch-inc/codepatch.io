import React from 'react';
import Layout from '../layouts/website.jsx';

const Post = (props) => {
    return (
        <Layout>
            <h1>{props.post.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};
Post.getInitialProps = async (context) => {
    // Could fetch data from database here:
    const { id } = context.query;
    const postMap = new Map([
        ['intro', {
            title : 'Introducing CodePatch'
        }],
        ['new-courses', {
            title : 'Our New Courses'
        }],
        ['advanced-react', {
            title : 'Creating a Cutting Edge App'
        }]
    ]);

    const post = postMap.get(id);

    return { post };
};

export default Post;
