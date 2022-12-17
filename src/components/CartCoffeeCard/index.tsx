import React, { memo } from 'react';

import { formatNumberInCurrency } from '../../helpers/utils/formatCurrency';

import trashIcon from '../../assets/icons/trash.svg';

import { 
    CoffeeCardContainer, 
    CoffeeTitle,
    CoffeeAmountContainer,
    SumOrDecreaseContainer,
    SumButtom,
    DecreaseButton,
    BodyContainer,
    ButtonsContainer,
    RemoveButton,
    CoffeePrice
} from './styles';

export type CartCoffeeCardProps = {
    coffeeImage: string;
    coffeeTitle: string;
    coffeePrice: number;
    coffeeQuantity: number;
    onDecrement: () => void;
    onIncrement: () => void;
    onRemove: () => void;
}

const CartCoffeeCard: React.FC<CartCoffeeCardProps> = ({ 
    coffeeImage,
    coffeeTitle,
    coffeePrice,
    coffeeQuantity,
    onDecrement,
    onIncrement,
    onRemove,
 }) => {
  return (
    <CoffeeCardContainer>
        <img src={coffeeImage} alt="" />

        <BodyContainer>
            <CoffeeTitle>{coffeeTitle}</CoffeeTitle>
            <ButtonsContainer>
                <CoffeeAmountContainer>
                    <SumOrDecreaseContainer>
                        <DecreaseButton onClick={onDecrement}>
                            -
                        </DecreaseButton>
                        <span>{coffeeQuantity}</span>
                        <SumButtom onClick={onIncrement}>
                            +
                        </SumButtom>                    
                    </SumOrDecreaseContainer>
                </CoffeeAmountContainer>

                <RemoveButton onClick={onRemove}>
                    <img src={trashIcon} alt="" />
                    <span>
                        REMOVER
                    </span>
                </RemoveButton>
            </ButtonsContainer>
        </BodyContainer>

        <CoffeePrice>
            R$ {formatNumberInCurrency(coffeePrice)}
        </CoffeePrice>
    </CoffeeCardContainer>
  );
}

export default memo(CartCoffeeCard);