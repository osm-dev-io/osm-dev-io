import { queryOptions } from "@tanstack/react-query";
import Post from "@/types/Post";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async (): Promise<Post[]> => {
    const res = await fetch("http://localhost:8080/posts");
    if (!res.ok) throw new Error("게시글 조회 실패");
    return res.json();
  },
});
