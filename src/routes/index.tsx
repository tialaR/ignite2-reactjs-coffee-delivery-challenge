import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayouts'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import CheckoutFilled from '../pages/CheckoutFilled'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/"  element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-filled" element={<CheckoutFilled />} />
      </Route>
    </Routes>
  )
}