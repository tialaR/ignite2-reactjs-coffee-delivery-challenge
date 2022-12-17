import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { coffeeList } from '../helpers/mocks/coffeeList.mock'

export type Product = {
  id: string;
  name: string;
  description: string;
  especifications: string[];
  priceUnit: number;
  image: string;
  quantity: number;
}

type ProductsContext = {
  products: Product[];
  amountOfProducts: number;
  increment(id: string): void;
  decrement(id: string): void;
  resetProductsList(): void;
 }

type ProductsProviderProps = {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContext | null>(null);

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(coffeeList);

  //Buscando produtos armazenados no AsyncStorage (os dados são mantidos no reload)
  // useEffect(() => {
  //   async function loadProducts(): Promise<void> {
  //     try {
  //       const listProducts = await AsyncStorage.getItem("@CoffeeDelivery:listProducts")
  
  //       if (listProducts) {
  //         setProducts([...JSON.parse(listProducts)]);
  //       }
  //     } catch (err: any) {
  //       console.log(err);
  //     }
  //   }

  //   loadProducts();
  // }, []);  

  const increment = useCallback(
    async (id: string) => {
      const newProducts = products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
      );

      setProducts(newProducts);

      // Caso queira salvar no localStorage
      // await AsyncStorage.setItem(
      //   '@CoffeeDelivery:listProducts',
      //   JSON.stringify(newProducts),
      // );
    },
    [products],
  );    
  

  const decrement = useCallback(
    async (id: string) => {
      const newProducts = products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity <= 1 ? p.quantity : p.quantity - 1 } : p,
      );

      setProducts(newProducts);

      // Caso queira salvar no localStorage
      // await AsyncStorage.setItem(
      //   '@CoffeeDelivery:listProducts',
      //   JSON.stringify(newProducts),
      // );
    },
    [products],
  );

  //Resetar lista de produtos
  const resetProductsList = useCallback(() => {
    setProducts(coffeeList);
  }, [])

  const amountOfProducts = useMemo(() => {
    return products?.length;
  },[products])

  const value = React.useMemo(
    () => ({ increment, decrement, resetProductsList, products, amountOfProducts }),
    [products, increment, decrement, resetProductsList],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

function useProducts(): ProductsContext {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(`useProduct must be used within a CartProvider`);
  }

  return context;
}

export { ProductsProvider, useProducts };