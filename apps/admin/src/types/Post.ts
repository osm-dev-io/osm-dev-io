import { JSONContent } from "@tiptap/react";

export default interface Post {
  id: number;
  title: string;
  content: JSONContent;
}
