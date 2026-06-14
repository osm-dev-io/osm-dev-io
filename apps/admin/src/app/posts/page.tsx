import { apiFetch } from "@/queries/apiClient";
import { Stack, Text, Title } from "@mantine/core";
import Post from "@/types/Post";
import NewPostButton from "@/components/NewPostButton";

export default async function PostsPage() {
  const posts = await apiFetch<Post[]>("/posts");

  return (
    <Stack>
      <Title>게시글 관리</Title>
      <NewPostButton />
      {posts.map((post) => (
        <Text key={post.id}>
          {post.id} {post.title}
        </Text>
      ))}
    </Stack>
  );
}
