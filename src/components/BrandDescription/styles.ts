import styled from 'styled-components';

export const BrandDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 0;
`;

export const Title = styled.p`
    color: ${props => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    
    display: flex;
    flex-direction: row;
`

export const RightContainer = styled.div`
  > span {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;

    display: flex;
    margin-top: 1rem;
  }
`;

export const BrandQualitiesContainer = styled.div`
    display: flex;
    margin-top: 4.125rem;

    >div {
        display: grid;
        grid-template-columns: 18.75rem 18.75rem;
        row-gap: 1.25rem;
    }
`;

export const BrandQuality = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  >img {

  }

  >span {
    color: ${props => props.theme['base-text']};
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 2rem;

  >img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;
