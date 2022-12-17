import React from 'react';

import { BrandDescriptionContainer, RightContainer, Title, BrandQualitiesContainer, BrandQuality, LeftContainer } from './styles';

import cartCircle from '../../assets/icons/cartCircle.svg';
import clockCircle from '../../assets/icons/clockCircle.svg';
import cupCircle from '../../assets/icons/cupCircle.svg';
import boxCircle from '../../assets/icons/boxCircle.svg';
import brandImage from '../../assets/images/brandImage.png';

const BrandDescription: React.FC = () => {
  return (
    <BrandDescriptionContainer>
        <RightContainer>
            <Title>Encontre o café perfeito <br/>para qualquer hora do dia</Title>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a <br/>qualquer hora</span>

            <BrandQualitiesContainer>
                <div>
                    <BrandQuality>
                        <img src={cartCircle} />
                        <span>Compra simples e segura</span>
                    </BrandQuality>
                    <BrandQuality>
                        <img src={boxCircle} />
                        <span>Compra simples e segura</span>
                    </BrandQuality>
                    <BrandQuality>
                        <img src={clockCircle} />
                        <span>Compra simples e segura</span>
                    </BrandQuality>
                    <BrandQuality>
                        <img src={cupCircle} />
                        <span>Compra simples e segura</span>
                    </BrandQuality>
                </div>
            </BrandQualitiesContainer>
        </RightContainer>
        
        <LeftContainer>
            <img src={brandImage} />
        </LeftContainer>
    </BrandDescriptionContainer>
  );
}

export { BrandDescription };