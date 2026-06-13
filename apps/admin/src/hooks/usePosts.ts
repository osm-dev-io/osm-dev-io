import { useQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "@/queries/posts";

export default function usePosts() {
  const { data } = useQuery(postsQueryOptions);
  return { posts: data };
}
