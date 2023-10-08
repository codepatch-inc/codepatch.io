import path from 'node:path';
import React from 'react';
import Link from 'next/link';
import { Header, List } from 'semantic-ui-react';
import { getPostFilenames, getPostById } from '../lib/api.js';
import Layout from '../layouts/website.jsx';

const PostLink = ({ post }) => {
    return (
        <Link href={`/blog/${post.id}`}>
            {post.title}
        </Link>
    );
};

const Blog = (props) => {
    return (
        <Layout>
            <Header as="h1" content="Blog" />
            <p>Check back soon!</p>
            <List
                bulleted
                items={props.posts.map((post) => {
                    return {
                        key     : post.id,
                        content : <PostLink post={post} />
                    };
                })}
            />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const filenames = await getPostFilenames();
    const posts = await Promise.all(filenames.map(async (filename) => {
        const id = path.parse(filename).name;
        const post = await getPostById(id);
        return post;
    }));

    return {
        props : {
            posts
        }
    };
};

export default Blog;
