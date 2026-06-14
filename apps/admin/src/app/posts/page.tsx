import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostsPageContent from "@/app/posts/PostsPageContent";
import { postsQueryOptions } from "@/queries/posts";
import { getQueryClient } from "@/queries/getQueryClient";

export default async function PostsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(postsQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsPageContent />
    </HydrationBoundary>
  );
}
