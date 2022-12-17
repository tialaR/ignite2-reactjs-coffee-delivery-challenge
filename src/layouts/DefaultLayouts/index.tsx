import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'

export const DefaultLayout: React.FC = () => {
  const navigate = useNavigate();
  const { quantityProductsInCart } = useCart();

  return (
    <LayoutContainer>
      <Header 
        badge={quantityProductsInCart}
        onCartClick={() => navigate('/checkout')} 
        onLogoClick={() => navigate('/')} 
      />
      <Outlet />
    </LayoutContainer>
  )
}