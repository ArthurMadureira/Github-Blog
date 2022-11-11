import { dateFormatter } from "../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  title: string;
  body: string;
  createdAt: string;
  comments_url?: string[];
}

export function Post({ title, body, createdAt }: PostProps) {
  const aboveLimit = body.length > 181
  const dotsOrEmpty = aboveLimit ? '...' : '';
  return (
    <PostContainer>
      <header>
        <h2>{title}</h2>
        <span>{dateFormatter.format(new Date(createdAt))}</span>
      </header>
      <p>{body.substring(0, 181) + dotsOrEmpty}</p>
    </PostContainer>
  )
}