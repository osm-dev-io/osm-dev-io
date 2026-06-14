import { mutationOptions, queryOptions } from "@tanstack/react-query";
import Post from "@/types/Post";
import { JSONContent } from "@tiptap/react";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async (): Promise<Post[]> => {
    const res = await fetch("http://localhost:8080/posts");
    if (!res.ok) throw new Error("게시글 조회 실패");
    return res.json();
  },
});

export const postsMutationOptions = mutationOptions({
  mutationFn: (vars: { title: string; content: JSONContent }) => {
    return fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vars),
    });
  },
});
