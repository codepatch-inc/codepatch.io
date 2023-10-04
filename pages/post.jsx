import Layout from '../layout/website.jsx';

const Post = (props) => (
    <Layout>
         <h1>{props.post.title}</h1>
         <p>This is the blog post content.</p>
    </Layout>
);
Post.getInitialProps = async (context) => {
    // Could fetch data from database here:
    const { id } = context.query
    const postMap = new Map([
        ['intro', {
            title : 'Introducing Codepatch'
        }],
        ['new-courses', {
            title : 'Our New Courses'
        }],
        ['advanced-react', {
            title : 'Creating a Cutting Edge App'
        }]
    ]);

    const post = postMap.get(id);
    console.log('post:', post);
    return { post };
};

export default Post
