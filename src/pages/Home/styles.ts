import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 54rem;
  margin: 3rem auto 0;
  
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;

  a {
    text-decoration: none;
  }
`