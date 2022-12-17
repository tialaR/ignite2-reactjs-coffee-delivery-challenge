import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  border-radius: 2px 30px 2px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 16rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.25rem;

  >img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.4rem;
  }
`;

export const CoffeEspecificationsContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  >ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;

    gap: 4px;
  }
`;

export const CoffeEspecification = styled.li`
  background-color: ${props => props.theme['yellow-light']};
  color:  ${props => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;

  border-radius: 20px;

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
`;

export const CoffeeTitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  text-align: center;

  color:  ${props => props.theme['base-subtitle']};
`;

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;

  color:  ${props => props.theme['base-label']};
`;

export const CoffeeBuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 2.063rem;
`;

export const CoffeePrice = styled.p`
  font-size: 0.875rem;
  line-height: 130%;

  color:  ${props => props.theme['base-text']};

  >span {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;

    color:  ${props => props.theme['base-text']};
  }
`;

export const CoffeeAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  margin-left: auto;
`;

export const SumOrDecreaseContainer = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 8px;

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

export const CartButton = styled.button`
    border: none;
    cursor: pointer;

    padding: 0.3rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${props => props.theme['purple-dark']};

    >img {
        width: 1rem;
        height: 1rem;
    }

    &:hover {
      opacity: 0.7;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-light']};
          /* 0 no eixo x, 0 no eixo y, 0 de blur e com a cor yellow-dark */
    }
`;