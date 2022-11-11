import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from "../../components/Post";
import { ProfileCard } from "./components/ProfileCard";
import { SearchForm } from "./components/SearchForm";
import { PostsContainer } from "./styles";


interface issuesData {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  created_at: string
  body: string
}

export function Home() {
  const [issues, setIssues] = useState<issuesData[]>([])
  const [postsFiltered, setPostsFiltered] = useState('')
  async function fetchIssues() {
    const response = await axios.get(`https://api.github.com/search/issues?q=${postsFiltered} repo:ArthurMadureira/Github-Blog`)
    setIssues(response.data?.items);

  }


  useEffect(() => {
    fetchIssues()
  }, [postsFiltered])

  return (
    <div>
      <ProfileCard />
      <SearchForm postsFiltered={postsFiltered} setPostsFiltered={setPostsFiltered} />

      <PostsContainer>
        {issues.map(item => {
          return (
            <Link to={`post/${item.number}`} key={item.number}>
              <Post title={item.title} body={item.body} createdAt={item.created_at} />
            </Link>
          )
        })}
      </PostsContainer>
    </div>
  )
}