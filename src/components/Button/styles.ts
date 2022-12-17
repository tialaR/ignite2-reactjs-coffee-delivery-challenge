import styled from 'styled-components';

export const ContainerButton = styled.button`
    border: none;
    cursor: pointer;

    height: 2.875rem;
    width: 100%;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${props => props.theme['yellow']};

    >span {
        color: #FFF;

        font-weight: 700;
        font-size: 0.875rem;
    }

    &:hover {
      opacity: 0.7;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-light']};
          /* 0 no eixo x, 0 no eixo y, 0 de blur e com a cor yellow-dark */
    }
`;
