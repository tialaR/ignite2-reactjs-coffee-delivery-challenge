import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 140rem; // tamanho máximo da tela toda
  padding: 0 5rem; //padding da tela toda
  margin: 0 auto;
  height: calc(100vh - 2.5rem);
  background-color: ${(props) => props.theme.background};
  border-radius: 8px; /* Para essa prop sempre usaremos a medida absoluta em pixel */
  display: flex;
  flex-direction: column;
`