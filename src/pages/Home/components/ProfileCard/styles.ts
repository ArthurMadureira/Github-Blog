import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  position: relative;
  z-index: 10000;

  width: 54rem;
  margin: -5rem auto 0;

  background: ${props => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 2rem;

  h2 {
    color: ${props => props.theme['base-title']};
  }

  p {
    color: ${props => props.theme['base-text']};
  }

  img {
    width: 9.5rem;
    height: 9.5rem;
    border-radius: 8px;
  }
`

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    gap: .2rem;
    color: ${props => props.theme['base-text']};

    &:hover {
      text-decoration: underline;
      color: ${props => props.theme['blue']};
    }
  }

  svg {
  }
`