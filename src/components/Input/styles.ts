import styled from 'styled-components';

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  
  padding: 0 0.5rem;
  height: 2.625rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
