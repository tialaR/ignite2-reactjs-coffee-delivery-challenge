import styled from 'styled-components';

export const Container = styled.div`
    > span {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;

        color:  ${props => props.theme['yellow-dark']};
    }

    > p {
        font-size: 1.25rem;
        line-height: 130%;

        color:  ${props => props.theme['base-subtitle']};
    }

    margin-top: 2.5rem;
    padding-bottom: 4rem;
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 5rem; 
    align-items: flex-start; /*Alinhar os elementos sempre no topo*/
`;


export const ContainerLeft = styled.div`
`;

export const ContainerLeftInformations = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  border: 1px solid ${props => props.theme['yellow-dark']};
  border-radius: 8px 32px 8px 32px;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const ContainerLeftInformation = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  }

  > img {
    width: 2rem;
    height: 2rem;
  }

  > span {
    color:  ${props => props.theme['base-text']};
  }
`;

export const ContainerRight = styled.div`
    > img {
        width: 30.75rem;
        height: 18.313rem;
    }
`;
