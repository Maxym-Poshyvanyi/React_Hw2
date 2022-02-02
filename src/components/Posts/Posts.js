import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(posts => <Post key={posts.id} post={posts}/>)}
        </div>
    );
};


export default Posts;
