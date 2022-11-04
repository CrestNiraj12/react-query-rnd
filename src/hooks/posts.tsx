import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: string | number;
  title: string;
  body: string;
}

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });
};

export const usePost = (postId: string | number) => {
  return useQuery<Post, Error>({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });
};

const getPostById = async (id: string | number) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};
