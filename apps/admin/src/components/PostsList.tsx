import { apiFetch } from "@/queries/apiClient";
import Post from "@/types/Post";
import { Stack, Text } from "@mantine/core";

export default async function PostsList() {
  const posts = await apiFetch<Post[]>("/posts");

  return (
    <Stack gap={16}>
      {posts.map((post) => (
        <Stack key={post.id} gap={4}>
          <Text>
            {post.id} {post.title}
          </Text>
          <Text>
            {post.updatedAt} {post.createdAt}{" "}
            {post.isPublished ? "Published!" : "Not Published!"}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
}
