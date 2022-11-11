import { useEffect, useState } from "react";
import axios from 'axios'
import { SearchFormContainer, SearchFormHeader } from "./styles";

interface SearchFormProps {
  postsFiltered: string;
  setPostsFiltered: (e: any) => void
}

export function SearchForm({ postsFiltered, setPostsFiltered }: SearchFormProps) {
  const [issues, setIssues] = useState([])

  async function fetchIssues() {
    const response = await axios.get('https://api.github.com/repos/ArthurMadureira/Github-Blog/issues')
    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [issues])

  return (
    <SearchFormContainer>
      <SearchFormHeader>
        <h2>Publicações</h2>
        <span>{issues?.length} publicações</span>
      </SearchFormHeader>
      <form action="" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <input
          type="text"
          name="inpur"
          placeholder="Buscar conteúdo"
          onChange={(e) => setPostsFiltered(e.target.value)}
          value={postsFiltered}
        />
      </form>
    </SearchFormContainer>
  )
}