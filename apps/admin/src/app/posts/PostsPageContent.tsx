"use client";

import { Button, Stack, Title } from "@mantine/core";
import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "@/queries/posts";

export default function PostsPageContent() {
  const { data: posts } = useQuery(postsQueryOptions);
  return (
    <Stack>
      <Title>게시글 관리</Title>
      <Button component={NextLink} href="/posts/new" w={200}>
        새 글 쓰기
      </Button>
      {posts?.map((post) => (
        <Title key={post.id}>{post.title}</Title>
      ))}
    </Stack>
  );
}
