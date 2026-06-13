import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PostsPageContent from "@/app/posts/PostsPageContent";
import { getQueryClient } from "@/components/Providers";
import { postsQueryOptions } from "@/queries/posts";

export default async function PostsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(postsQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsPageContent />
    </HydrationBoundary>
  );
}
