import React, { memo } from 'react';

import { formatNumberInCurrency } from '../../helpers/utils/formatCurrency';

import { 
    CoffeeCardContainer, 
    CoffeEspecificationsContainer, 
    CoffeEspecification,
    CoffeeTitle,
    CoffeeDescription,
    CoffeeBuyContainer,
    CoffeePrice,
    CoffeeAmountContainer,
    SumOrDecreaseContainer,
    SumButtom,
    DecreaseButton,
    CartButton,
} from './styles';

import cartWhite from '../../assets/icons/cartWhite.svg';

export type CoffeeCardProps = {
    coffeeImage: string;
    coffeEspecifications: string[];
    coffeeTitle: string;
    coffeeDescription: string;
    coffeePrice: number;
    coffeeQuantity: number;
    onDecrement: () => void;
    onIncrement: () => void;
    onAddToCart: () => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ 
    coffeeImage,
    coffeEspecifications,
    coffeeTitle,
    coffeeDescription,
    coffeePrice,
    coffeeQuantity,
    onDecrement,
    onIncrement,
    onAddToCart
 }) => {
  return (
    <CoffeeCardContainer>
        <img src={coffeeImage} alt="" />
        <CoffeEspecificationsContainer>
            <ul>
                {coffeEspecifications?.map((coffeEspecification: string) => (
                    <CoffeEspecification>
                        <span>{coffeEspecification}</span>
                    </CoffeEspecification>
                ))}
            </ul>

            <CoffeeTitle>{coffeeTitle}</CoffeeTitle>
            <CoffeeDescription>{coffeeDescription}</CoffeeDescription>
        </CoffeEspecificationsContainer>

        <CoffeeBuyContainer>
            <CoffeePrice>
                R$ <span>{formatNumberInCurrency(coffeePrice)}</span>
            </CoffeePrice>
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
                <CartButton onClick={onAddToCart}>
                    <img src={cartWhite} alt="" />
                </CartButton>
            </CoffeeAmountContainer>
        </CoffeeBuyContainer>
    </CoffeeCardContainer>
  );
}

export default memo(CoffeeCard);