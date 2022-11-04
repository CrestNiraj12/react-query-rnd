import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "../../hooks/posts";

const Posts = ({ setPostId }: { setPostId: Function }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post, index) => (
                <p key={post.id}>
                  <button
                    className="post"
                    onClick={() => setPostId(post.id)}
                    style={
                      queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                          }
                        : {}
                    }
                  >
                    {index + 1}. {post.title}
                  </button>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
