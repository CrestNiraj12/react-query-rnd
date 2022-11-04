import React from "react";
import Posts from "./Posts";
import Post from "./Post";

const App = () => {
  const [postId, setPostId] = React.useState(null);

  return (
    <div className="container">
      {postId != null ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </div>
  );
};

export default App;
