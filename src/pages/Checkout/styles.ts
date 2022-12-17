import styled, { css } from "styled-components";

export const Container = styled.form`
    padding-bottom: 4rem;

    display: grid;
    grid-template-columns: 1fr 40%; /*Cart com largura fixa de 256px e o resto do conteúdo ocupa todo o espaço*/
    gap: 2rem; /*divisão entre a cart e os forms*/
    align-items: flex-start; /*Alinhar os elementos sempre no topo*/
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;

    > span {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;

        color: ${props => props.theme["base-subtitle"]};

        margin-bottom: 0.938rem;
    }
`;

export const FormContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};

    padding: 2.5rem;
    border-radius: 8px;
`;

export const FormIconAndInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    > img {
        width: 1.375rem;
        height: 1.375rem;
    }
`;

export const FormInfoContainer = styled.div`
    margin-left: 0.5rem;
`;

export const FormTitle = styled.span`
    display: flex;
`;

export const FormDescription = styled.span`
    display: flex;
    font-size: 14px;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    > input + input {
        margin-top: 1rem;
    }
`

export const InputsSubContainerOne = styled.div`
    display: flex;
    flex: 1;

    margin-top: 1rem;
    margin-bottom: 1rem;

    > input + input {
        margin-left: 0.75rem;
    }
`

export const InputsSubContainerTwo = styled.div`
    display: flex;
    width: 100%;

    > input + input {
        margin-left: 0.75rem;
    }
`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme["base-card"]};

    margin-top: 0.75rem;
    padding: 2.5rem;
    border-radius: 8px;
`;

export const PaymentIconAndInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    > img {
        width: 1.375rem;
        height: 1.375rem;
    }
`;

export const PaymentInfoContainer = styled.div`
    margin-left: 0.5rem;
`;

export const PaymentTitle = styled.span`
    display: flex;
`;

export const PaymentDescription = styled.span`
    display: flex;
    font-size: 14px;
`;

export const PaymentFormsContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    gap: 0.75rem;
`
type PaymentFormButtonProps = {
    ckecked?: boolean;
}
export const PaymentFormButton = styled.button<PaymentFormButtonProps>`
    display: flex;
    align-items: center;
    padding: 1rem 1.25rem;

    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;

    border: 1px solid ${props => props.theme["base-button"]};

    cursor: pointer;
    line-height: 0;
    transition: background-color 0.1s;

    > span {
        font-size: 0.75rem;
        color: ${props => props.theme["base-text"]};
    }

    > img {
        margin-right: 0.75rem;
        width: 1rem;
        height: 1rem;
    }

    &:hover {
        opacity: 0.7;
    }

    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple']};
        /* 0 no eixo x, 0 no eixo y, 0 de blur e com a cor yellow-dark */
    }

    ${({ ckecked }) =>
    ckecked &&
    css`
      border: 1px solid ${props => props.theme["purple-dark"]};
      background-color: ${props => props.theme["purple-light"]};
    `};
`

export const RigthContainer = styled.div`
    display: flex;
    flex-direction: column;

    > span {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;

        color: ${props => props.theme["base-subtitle"]};

        margin-bottom: 0.938rem;
    }
`

export const CartContainer = styled.div`
    background-color: ${props => props.theme["base-card"]};

    padding: 1rem 2.5rem 2.5rem 2.5rem;

    border-radius: 8px 32px 8px 32px;
`

export const AmountContainer = styled.div`
    margin-top: 1.5rem;

    > button {
        margin-top: 1.5rem;
    }
`;

export const TinAmountContainer = styled.div`
    > span {
        color: ${props => props.theme["base-text"]};
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SeparatorY = styled.div`
    height: 0.875rem;
`

export const BoldAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span {
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        font-weight: 700;
    }
`;