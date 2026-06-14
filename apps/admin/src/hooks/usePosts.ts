import { useQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "@/queries/posts";

export default function usePosts() {
  const res = useQuery(postsQueryOptions);
  return res.data;
}
