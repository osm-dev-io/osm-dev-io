"use client";

import TextEditor from "@/components/TextEditor";
import { useState } from "react";

export default function NewPostPage() {
  const [content, setContent] = useState({});

  return <TextEditor value={content} onChange={setContent} />;
}
