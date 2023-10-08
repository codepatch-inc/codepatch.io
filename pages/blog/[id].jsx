import path from 'node:path';
import React from 'react';
import { Header } from 'semantic-ui-react';
import { getPostById, getPostFilenames } from'../../lib/api.js';
import Layout from '../../layouts/website.jsx';

const Post = (props) => {
    return (
        <Layout>
            <Header as="h1" content={props.post.title} />
            <p>This is the blog post content:</p>
            <pre>{props.post.content}</pre>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const filenames = await getPostFilenames();
    return {
        fallback : false,
        paths    : filenames.map((filename) => {
            return {
                params : {
                    id : path.parse(filename).name
                }
            }
        })
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id);
    return {
        props : {
            post
        }
    };
};

export default Post;
