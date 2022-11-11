import axios from "axios";
import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Body } from "./components/Body";
import { PostInfoCard } from "./components/PostInfoCard";

interface IssueData {
  title: string;
  user: any;
  createdAt: Date;
  comments_url: string;
  html_url: string;
  body: string
}

export function PostPage() {
  const [issue, setIssue] = useState<IssueData>({} as IssueData)

  const { postId } = useParams()

  async function fetchIssue() {
    const response = await axios.get(`https://api.github.com/repos/ArthurMadureira/Github-Blog/issues/${postId}`)
    setIssue(response.data)
  }

  useEffect(() => {
    fetchIssue()
  })

  return (
    <div>
      <PostInfoCard
        title={issue?.title}
        user={issue?.user}
        commentsUrl={issue?.comments_url}
        html_url={issue?.html_url}
        createdAt={issue?.createdAt}
      />
      <Body body={issue?.body} />
    </div>
  )
}