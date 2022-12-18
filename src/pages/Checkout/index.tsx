import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { createSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Input from '../../components/Input';

import { Product, useCart } from '../../hooks/useCart';

import { formatNumberInCurrency } from '../../helpers/utils/formatCurrency';

import outlinedLocation from '../../assets/icons/outlined-location.svg'
import currency from '../../assets/icons/currency.svg'
import creditCard from '../../assets/icons/credit-card.svg'
import bank from '../../assets/icons/bank.svg'
import money from '../../assets/icons/money.svg'

import * as S from './styles';
import CartCoffeeCard from '../../components/CartCoffeeCard';
import Button from '../../components/Button';

type PaymentForms = 'credit-card' | 'debit' | 'money'

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitted } } = useForm();
  
  const { cartProducts, cartAmount, deliveryPrice, incrementInCart, decrementInCart, deleteToCart, resetCart } = useCart();

  const [paymentForm, setPaymentForm] = useState<PaymentForms | null>(null);
  const [formData, setFormData] = useState<any>(undefined);

  const totalPriceOfItemsWithDelivery = useMemo(() => cartAmount + deliveryPrice,[cartAmount, deliveryPrice])

  const onSubmit = useCallback((data: any) => {
    setFormData(data)
  }, []);

  const navigateToCheckoutFilledPage = useCallback(() => {
    const isAddressConfirmed = formData.cep && formData.rua && formData.numero && formData.bairro && formData.cidade && formData.uf;

    if (isSubmitted && paymentForm && isAddressConfirmed) {
        resetCart();
        navigate({
            pathname: '/checkout-filled',
            search: createSearchParams({
                address: `Rua ${formData.rua}, ${formData.numero}`,
                addressComplement: `${formData.bairro} - ${formData.cidade}, ${formData.uf}`,
                paymentForm,
            }).toString()
        });
    }
  }, [isSubmitted, paymentForm, formData])

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
        <S.LeftContainer>
            <span>Complete seu pedido</span>
            <S.FormContainer>
                <S.FormIconAndInfoContainer>
                    <img src={outlinedLocation} />
                    <S.FormInfoContainer>
                        <S.FormTitle>Endereço de Entrega</S.FormTitle>
                        <S.FormDescription>Informe o endereço onde deseja receber seu pedido</S.FormDescription>
                    </S.FormInfoContainer>
                </S.FormIconAndInfoContainer>

                <S.InputsContainer>
                    <Input name="cep" register={register} placeholder='CEP' style={{ width: "30%" }} />
                    <Input name="rua"  register={register} placeholder='Rua' />

                    <S.InputsSubContainerOne>
                        <Input name="numero"  register={register} placeholder='Número' style={{ width: "30%" }} />
                        <Input name="complemento"  register={register} placeholder='Complemento' style={{ flex: 1 }} />
                    </S.InputsSubContainerOne>

                    <S.InputsSubContainerTwo>
                        <Input name="bairro"  register={register} placeholder='Bairro' style={{ width: "30%" }} />
                        <Input name="cidade"  register={register} placeholder='Cidade' style={{ flex: 1 }} />
                        <Input name="uf"  register={register} placeholder='UF' style={{ width: "10%" }} />
                    </S.InputsSubContainerTwo>
                </S.InputsContainer>
            </S.FormContainer>

            <S.PaymentContainer>
                <S.PaymentIconAndInfoContainer>
                    <img src={currency} />
                    <S.PaymentInfoContainer>
                        <S.PaymentTitle>Pagamento</S.PaymentTitle>
                        <S.PaymentDescription>O pagamento é feito na entrega. Escolha a forma que deseja pagar</S.PaymentDescription>
                    </S.PaymentInfoContainer>
                </S.PaymentIconAndInfoContainer>

                <S.PaymentFormsContainer>
                    <S.PaymentFormButton 
                        {...register('paymentForm')}
                        ckecked={paymentForm === 'credit-card'}
                        onClick={() => setPaymentForm('credit-card')}
                    >
                        <img src={creditCard} />
                        <span>{`Cartão de crédito`.toUpperCase()}</span>
                    </S.PaymentFormButton>
                    <S.PaymentFormButton 
                        {...register('paymentForm')}
                        ckecked={paymentForm === 'debit'}
                        onClick={() => setPaymentForm('debit')}
                    >
                        <img src={bank} />
                        <span>{`cartão de débito`.toUpperCase()}</span>
                    </S.PaymentFormButton>
                    <S.PaymentFormButton 
                        {...register('paymentForm')}
                        ckecked={paymentForm === 'money'}
                        onClick={() => setPaymentForm('money')}
                    >
                        <img src={money} />
                        <span>{`dinheiro`.toUpperCase()}</span>
                    </S.PaymentFormButton>
                </S.PaymentFormsContainer>
            </S.PaymentContainer>
        </S.LeftContainer>

        <S.RigthContainer>
            <span>Cafés selecionados</span>
            <S.CartContainer>
                {cartProducts?.map((item: Product) => (
                    <CartCoffeeCard
                        key={item.id}
                        coffeeImage={item.image}
                        coffeeTitle={item.name}
                        coffeeQuantity={item.quantity}
                        coffeePrice={item.priceAmount}
                        onIncrement={() => incrementInCart(item.id)}
                        onDecrement={() => decrementInCart(item.id)}
                        onRemove={() => deleteToCart(item)}
                    />
                ))}

                <S.AmountContainer>
                    <S.TinAmountContainer>
                        <span>Total de itens</span>
                        <span>R$ {formatNumberInCurrency(cartAmount)}</span>
                    </S.TinAmountContainer>
                    <S.SeparatorY />
                    <S.TinAmountContainer>
                        <span>Entrega</span>
                        <span>R$ {formatNumberInCurrency(deliveryPrice)}</span>
                    </S.TinAmountContainer>
                    <S.SeparatorY />
                    <S.BoldAmountContainer>
                        <span>Total</span>
                        <span>R$ {formatNumberInCurrency(totalPriceOfItemsWithDelivery)}</span>
                    </S.BoldAmountContainer>

                    <Button type="submit" title='CONFIRMAR PEDIDO' onClick={navigateToCheckoutFilledPage} /> 
                </S.AmountContainer>
            </S.CartContainer>
        </S.RigthContainer>
    </S.Container>
  );
}

export default Checkout;