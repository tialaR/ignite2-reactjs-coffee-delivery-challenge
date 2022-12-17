import styled from 'styled-components';

export const CoffeesList = styled.div`
  margin-top: 2rem;
  padding-bottom: 6rem;

  >ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const CofesListTitle = styled.p`
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;    
    line-height: 130%;

    margin-bottom: 3.2rem;
`;
