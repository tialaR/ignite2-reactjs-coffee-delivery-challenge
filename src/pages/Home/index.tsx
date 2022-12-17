import React from 'react';

import { BrandDescription } from '../../components/BrandDescription';
import CoffeeCard from '../../components/CoffeeCard';

import { useCart } from '../../hooks/useCart';
import { useProducts, Product } from '../../hooks/useProducts';

import { CoffeesList, CofesListTitle } from './styles';

const Home: React.FC = () => {
  const { products, decrement, increment, resetProductsList } = useProducts();
  const { addToCart } = useCart();

  return (
    <>
        <BrandDescription />

        <CoffeesList>
          <CofesListTitle>Nossos cafés</CofesListTitle>

            <ul>
              {products.map((coffee: Product) => (
                <CoffeeCard
                  key={coffee.id}
                  coffeeTitle={coffee.name}
                  coffeeDescription={coffee.description}
                  coffeeImage={coffee.image}
                  coffeEspecifications={coffee.especifications}
                  coffeePrice={coffee.priceUnit}
                  coffeeQuantity={coffee.quantity}
                  onIncrement={() => increment(coffee.id)}
                  onDecrement={() => decrement(coffee.id)}
                  onAddToCart={() => {
                    addToCart(coffee);
                    resetProductsList();
                  }}
                />
              ))}
            </ul>
        </CoffeesList>
    </>
  );
}

export default Home;