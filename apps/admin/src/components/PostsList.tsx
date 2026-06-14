import { apiFetch } from "@/queries/apiClient";
import Post from "@/types/Post";
import { Box, Text } from "@mantine/core";

export default async function PostsList() {
  const posts = await apiFetch<Post[]>("/posts");
  return (
    <Box>
      {posts.map((post) => (
        <Text key={post.id}>
          {post.id} {post.title}
        </Text>
      ))}
    </Box>
  );
}
