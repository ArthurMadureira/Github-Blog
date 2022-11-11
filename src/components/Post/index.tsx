import { dateFormatter } from "../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  title: string;
  body: string;
  createdAt: string;
  comments_url?: string[];
}

export function Post({ title, body, createdAt }: PostProps) {
  return (
    <PostContainer>
      <header>
        <h2>{title}</h2>
        <span>{dateFormatter.format(new Date(createdAt))}</span>
      </header>
      <p>{body}</p>
    </PostContainer>
  )
}