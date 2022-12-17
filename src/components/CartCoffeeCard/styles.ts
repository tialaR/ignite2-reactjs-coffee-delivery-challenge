import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background-color: ${props => props.theme['base-card']};

  display: flex;
  align-items: center;

  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  border-bottom: 1px solid ${props => props.theme['base-button']};

  >img {
    width: 4rem;
    height: 4rem;
  }
`;

export const BodyContainer = styled.div`
  margin-left: 1.25rem;

  align-self: flex-start;
`;

export const CoffeeTitle = styled.p`
  color:  ${props => props.theme['base-subtitle']};

  margin-bottom: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const CoffeeAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const SumOrDecreaseContainer = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 8px;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    >span {
        padding: 0 0.5rem;
        color: ${props => props.theme['base-title']};
    }
`;

export const SumButtom = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 130%;
  text-align: center;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0.3rem 0.6rem;

  border: 0;
  cursor: pointer;

  color:  ${props => props.theme.purple};
  background-color: ${props => props.theme['base-button']};
`;

export const DecreaseButton = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 130%;
  text-align: center;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0.3rem 0.6rem;

  border: 0;
  cursor: pointer;

  color:  ${props => props.theme.purple};
  background-color: ${props => props.theme['base-button']};
`;

export const RemoveButton = styled.button`
  height: 2rem;

  padding: 0 0.5rem;

  border: 0;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color:  ${(props) => props.theme['base-button']};
  transition: background-color 0.1s;

  cursor: pointer;

  >img {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    opacity: 0.7;
  }

    >span {
      font-size: 0.75rem;
      color:  ${props => props.theme['base-text']};
    }
`;

export const CoffeePrice = styled.p`
  font-weight: 700;

  color:  ${props => props.theme['base-text']};

  margin-left: auto;
  align-self: flex-start;
`;
