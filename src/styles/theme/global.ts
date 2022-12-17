import { createGlobalStyle } from 'styled-components'

/* Estilos globais da aplicação */
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0; /*No navegador por padrão o foco sempre é definido 
        com o outline (estou tirando isso do evento de foco e colocando 
        esse evento no box-shadow para essa funcionalidade)*/
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`