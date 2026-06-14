import { mutationOptions, queryOptions } from "@tanstack/react-query";
import Post from "@/types/Post";
import { JSONContent } from "@tiptap/react";
import { apiFetch } from "@/queries/apiClient";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => {
    const data = await apiFetch<Post[]>("/posts");
    return data;
  },
});

export const postsMutationOptions = mutationOptions({
  mutationFn: (vars: { title: string; content: JSONContent }) => {
    return apiFetch<null>("/posts", {
      method: "POST",
      body: JSON.stringify(vars),
    });
  },
});
