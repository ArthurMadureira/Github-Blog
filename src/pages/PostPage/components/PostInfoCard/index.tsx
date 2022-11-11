import { PostInfoCardContainer, PostInfos } from "./styles";
import { ArrowLeft, ChatDots, ClockAfternoon } from "phosphor-react";
import { Link } from "react-router-dom";

interface PostInfoCardProps {
  title: string;
  user: {
    login: string;
    html_url: string;
  };
  createdAt: string;
  commentsUrl: string;
  html_url: string;
}

export function PostInfoCard({ title, user, createdAt, commentsUrl, html_url }: PostInfoCardProps) {
  return (
    <PostInfoCardContainer>
      <header>
        <Link to='/'>
          <ArrowLeft />
          Voltar
        </Link>

        <a href={html_url} target='_blank'>
          ver no github
        </a>
      </header>

      <h2>{title}</h2>

      <PostInfos>
        <span>@ArthurMadureira</span>

        <span>
          <ClockAfternoon size={20} />
          Há um dia
        </span>

        <Link to={commentsUrl}>
          <ChatDots size={18} />
          5 commentários
        </Link>
      </PostInfos>
    </PostInfoCardContainer>
  )
}