import React from "react";
import { usePost } from "../../hooks/posts";

const Post = ({
  postId,
  setPostId,
}: {
  postId: string | number;
  setPostId: Function;
}) => {
  const { status, data, error, isFetching } = usePost(postId);

  return (
    <div>
      <div>
        <button onClick={() => setPostId(null)}>Back</button>
      </div>
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
};

export default Post;
