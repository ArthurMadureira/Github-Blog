import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 54rem;
  margin: 4rem auto 0;

  form {
    margin-top: 0.75rem;

    input {
      outline: 0;
      border: 1px solid ${props => props.theme['base-border']};
      width: 100%;
      padding: 0.75rem 1rem;

      background: ${props => props.theme['base-input']};

      border-radius: 6px;

      color: ${props => props.theme['base-text']};

      &::placeholder {
        color: ${props => props.theme['base-label']};
      }
      
    }
  } 
`

export const SearchFormHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme['base-subtitle']}
    }

    span {
      color: ${props => props.theme['base-text']};
    }
`