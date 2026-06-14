import { mutationOptions, queryOptions } from "@tanstack/react-query";
import Post from "@/types/Post";
import { JSONContent } from "@tiptap/react";
import { apiFetch } from "@/queries/apiClient";

export const postsQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => await apiFetch<Post[]>("/posts"),
});

export const postsMutationOptions = mutationOptions({
  mutationFn: (body: { title: string; content: JSONContent }) =>
    apiFetch<null>("/posts", {
      method: "POST",
      body: JSON.stringify(body),
    }),
});
