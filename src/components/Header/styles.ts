import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  >img {
    width: 5.313rem;
    height: 2.5rem;
    will-change: filter;

    cursor: pointer;
  }
`;

export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.625rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-light']};

  >img {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1.25rem;
  }
`;

export const LocationDescription = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
`;

export const CartButton = styled.button`
  position: relative;
  padding: 0.625rem;

  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color:  ${(props) => props.theme['yellow-light']};
  transition: background-color 0.1s;

  cursor: pointer;

  > span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['base-button']};

    font-weight: 700;
    font-size: 0.75rem;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 20px;
  }

  >img {
    width: 1.125rem;
    height: 1.188rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
        /* 0 no eixo x, 0 no eixo y, 0 de blur e com a cor yellow-dark */
  }
`;
