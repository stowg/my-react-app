
import Post from "./Post";
import classes from "./posts-list.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {

  const posts = useLoaderData();
  
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, key) => (
            <Post key={key} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
            <div style={{ textAlign: 'center', colour: 'white' }}>
            <h2> There are no posts yet.</h2>
            <p>Start adding some! </p>
            </div>
      )}
    </>
  );
}

export default PostsList;
