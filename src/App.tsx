import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './hooks/useCart';
import { ProductsProvider } from './hooks/useProducts';

import { Router } from './routes'

import { GlobalStyle } from "./styles/theme/global"
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </ProductsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
