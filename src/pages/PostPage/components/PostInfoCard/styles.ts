import styled from "styled-components";

export const PostInfoCardContainer = styled.div`
  position: relative;
  z-index: 46346374637;
  width: 54rem;
  height: auto;
  margin: -5rem auto 0;
  padding: 2rem 2rem 3rem;

  border-radius: 10px;
  background: ${props => props.theme['base-post']};

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    
    span,a {
      color: ${props => props.theme['blue']};
      text-transform: uppercase;
      font-size: 0.8rem;

      display: flex;
      align-items: center;
      gap: 0.3rem;
      text-decoration: none;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.8rem;
    color: ${props => props.theme['base-title']};
    margin-bottom: 1.5rem;
  }
`

export const PostInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span, a {
    color: ${props => props.theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    text-decoration: none;
  }
`