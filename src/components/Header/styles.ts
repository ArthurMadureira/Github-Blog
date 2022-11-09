import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme['base-profile']};

  height: 18.5rem;

  .effect-left {
    position: absolute;
    left: 0;
  }
  .effect-right {
    position: absolute;
    right: 0;
  }

  h1 {
    font-family: 'Coda';
    font-weight: 400;
    color: ${props => props.theme['blue']};
  }
`

export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;

  .terminal-solid {
    width: 3.8125rem;
    height: 3.5rem;
  }
  `