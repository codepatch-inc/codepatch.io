import fs from 'node:fs/promises';

const getPostById = async (id) => {
    // FIXME: This code is vulnerable to a path traversal attack with a malicious postId
    const postPath = new URL(`../posts/${id}.jsx`, import.meta.url);
    // TODO: Don't read file. Maybe import() or render MDX file?
    const post = await fs.readFile(postPath, 'utf8');
    return {
        id,
        // TODO: Read title from post metadata
        title   : id,
        content : post
    };
};

const getPostFilenames = async () => {
    const filenames = await fs.readdir('posts');
    return filenames
};

export {
    getPostById,
    getPostFilenames
}
