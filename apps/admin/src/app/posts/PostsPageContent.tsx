"use client";

import { Stack, Title } from "@mantine/core";
import usePosts from "@/hooks/usePosts";

export default function PostsPageContent() {
  const { posts } = usePosts();
  return (
    <Stack>
      <Title>게시글 관리</Title>
      {posts?.map((post) => (
        <Title key={post.id}>{post.title}</Title>
      ))}
    </Stack>
  );
}
