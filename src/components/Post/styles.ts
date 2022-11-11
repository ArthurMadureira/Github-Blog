import styled from "styled-components";

export const PostContainer = styled.div`
  height: 16.25rem;
  padding: 2rem;
  background: ${props => props.theme['base-post']};
  border-radius: 10px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 0.6rem;
    margin-bottom: 1.25rem;

    h2 {
      color: ${props => props.theme['base-title']};
      font-size: 0.9rem;
      width: 80%;
    }

    span {
      color: ${props => props.theme['base-text']};
      font-size: 0.9rem;
    }
  }
  

  p {
    max-width: 352px;
    color: ${props => props.theme['base-text']};
    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
  }
`