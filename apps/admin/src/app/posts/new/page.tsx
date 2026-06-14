"use client";

import TextEditor from "@/components/TextEditor";
import { useState } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { postsMutationOptions } from "@/queries/posts";

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});

  const mutation = useMutation(postsMutationOptions);

  return (
    <Stack>
      <TextInput
        variant="unstyled"
        placeholder="제목"
        size="xl"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        styles={{
          input: {
            fontSize: "var(--mantine-h1-font-size)",
            fontWeight: "var(--mantine-h1-font-weight)",
          },
        }}
      />
      <TextEditor value={content} onChange={setContent} />
      <Group justify="end">
        <Button
          onClick={() => {
            mutation.mutate({ title, content });
          }}
        >
          저장
        </Button>
      </Group>
    </Stack>
  );
}
