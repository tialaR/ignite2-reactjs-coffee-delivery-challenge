import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

export type Product = {
  id: string;
  name: string;
  description: string;
  especifications: string[];
  priceUnit: number;
  priceAmount: number;
  image: string;
  quantity: number;
}

type CartContext = {
  cartProducts: Product[];
  cartAmount: number;
  deliveryPrice: number;
  quantityProductsInCart: number;
  addToCart(product: Omit<Product, 'priceAmount'>): void;
  deleteToCart(item: Product): void;
  incrementInCart(id: string): void;
  decrementInCart(id: string): void;
  resetCart(): void;
}

type CartProviderProps = {
  children: ReactNode;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [quantityProductsInCart, setQuantityProductsInCart] = useState(0);

  //Buscando produtos armazenados no AsyncStorage do carrinho (os dados são mantidos no reload)
  useEffect(() => {
    async function loadCartProducts(): Promise<void> {
      try {
        const cartProducts = await AsyncStorage.getItem("@CoffeeDelivery:cartProducts")
  
        if (cartProducts) {
          setCartProducts([...JSON.parse(cartProducts)]);
        }
      } catch (err: any) {
        console.log(err);
      }
    }

    loadCartProducts();
  }, []);

  useEffect(() => {
    const cartProductsAux = [...cartProducts];

    //Soma do preço dos produtos no carrinho
    const sum = cartProductsAux.reduce((partialSum, item) => partialSum + Number(item.priceAmount), 0);
    setCartAmount(sum);

    //Quantidade de items no carrinho
    const quantity = cartProductsAux.reduce((partialSum, item) => partialSum + Number(item.quantity), 0);
    setQuantityProductsInCart(quantity);

    setDeliveryPrice(sum > 0 ? 3.5 : 0);
  }, [cartProducts])

  const addToCart = useCallback(
    async (product: Omit<Product, 'priceAmount'>) => {
      // Verificando se o produto já existe
      const productExists = cartProducts.find(p => p.id === product.id);

      if (productExists) { 
        // Incrementando quantidade e preço de um produto caso ele já exista na lista
        setCartProducts(
          cartProducts.map(p =>
            p.id === product.id 
            ? { 
                ...product, 
                quantity: p.quantity + 1,
                priceAmount: p.priceUnit * (p.quantity + 1) //Multiplica preço unitário do produto com a quantidade dele no carrinho
              } 
            : p,
          ),
        );
      } else {
        // Inserindo a nova prop priceAmount no objeto de produto
        // Inserindo produto no carrinho com o preço e quantidade dele caso ele não exista
        setCartProducts([...cartProducts, {...product, priceAmount: product.priceUnit * product.quantity} ]);
      }

      alert('Produto adicionado com sucesso!');

      await AsyncStorage.setItem(
        '@CoffeeDelivery:cartProducts',
        JSON.stringify(cartProducts),
      );
    },
    [cartProducts],
  );

  const deleteToCart = useCallback(
    async (product: Product) => {
      // Buscando produto para deletar
      const productToDeleteIndex = cartProducts.indexOf(product);

      // Removendo produto do carrinho
        const cartProductsAux =  [...cartProducts];
        cartProductsAux.splice(productToDeleteIndex, 1);
        setCartProducts(cartProductsAux);
    

      await AsyncStorage.setItem(
        '@CoffeeDelivery:cartProducts',
        JSON.stringify(cartProductsAux),
      );
    },
    [cartProducts],
  );

  const incrementInCart = useCallback(
    async (id: string) => {
      const newProducts = cartProducts.map(p =>
        p.id === id 
        ? { 
            ...p, 
            quantity: p.quantity + 1, 
            priceAmount: p.priceUnit * (p.quantity + 1) 
          } 
        : p,
      );

      setCartProducts(newProducts);

      await AsyncStorage.setItem(
        '@CoffeeDelivery:cartProducts',
        JSON.stringify(newProducts),
      );
    },
    [cartProducts],
  );    
  

  const decrementInCart = useCallback(
    async (id: string) => {
      const newProducts = cartProducts.map(p =>
        p.id === id 
        ? { 
            ...p, 
            quantity: p.quantity <= 1 ? p.quantity : p.quantity - 1, 
            priceAmount: p.quantity > 1 ? p.priceAmount - p.priceUnit : p.priceAmount,
          } 
        : p,
      );

      setCartProducts(newProducts);

      await AsyncStorage.setItem(
        '@CoffeeDelivery:cartProducts',
        JSON.stringify(newProducts),
      );
    },
    [cartProducts],
  );

  //Resetar carrinho
  const resetCart = useCallback(async() => {
    setCartProducts([]);
    setCartAmount(0);
    setDeliveryPrice(0);
    setQuantityProductsInCart(0);

    await AsyncStorage.setItem(
      '@CoffeeDelivery:cartProducts',
      JSON.stringify([]),
    );
  }, [])

  const value = React.useMemo(
    () => ({ addToCart, deleteToCart, incrementInCart, decrementInCart, resetCart, cartProducts, cartAmount, deliveryPrice, quantityProductsInCart }),
    [ cartProducts, cartAmount, deliveryPrice, quantityProductsInCart, addToCart, deleteToCart,incrementInCart, decrementInCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };