import React, { useMemo } from 'react';

import { HeaderContainer, RightContentContainer, LocationContainer, LocationDescription, CartButton } from './styles';

import logo from '../../assets/icons/logo.svg';
import cart from '../../assets/icons/cart.svg';
import location from '../../assets/icons/location.svg';

type HeaderProps = {
  badge: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ badge, onCartClick, onLogoClick }) => {
  const isShowBadge = useMemo(() => badge > 0 ,[badge]);

  return (
    <HeaderContainer>
        <img src={logo} alt="logo" onClick={onLogoClick} />

        <RightContentContainer>
          <LocationContainer>
            <img src={location} alt="location-icon" />
            <LocationDescription>
              Porto Alegre, RS
            </LocationDescription>
          </LocationContainer>

          <CartButton onClick={onCartClick}>
            {isShowBadge && <span>{badge}</span>}
            <img src={cart} alt="cart-icon" />
          </CartButton>
        </RightContentContainer>
    </HeaderContainer>
  );
}

export { Header };