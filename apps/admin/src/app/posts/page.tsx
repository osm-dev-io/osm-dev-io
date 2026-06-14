import { Stack, Text, Title } from "@mantine/core";
import NewPostButton from "@/components/NewPostButton";
import PostsList from "@/components/PostsList";

export default function PostsPage() {
  return (
    <Stack>
      <Title>게시글 관리</Title>
      <NewPostButton />
      <PostsList />
    </Stack>
  );
}
