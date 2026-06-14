"use client";

import { Button } from "@mantine/core";
import NextLink from "next/link";

export default function NewPostButton() {
  return (
    <Button component={NextLink} href="/posts/new" w={200}>
      새 글 쓰기
    </Button>
  );
}
