import React, { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import local from '../../assets/icons/local-round.svg';
import time from '../../assets/icons/time-round.svg';
import payment from '../../assets/icons/payment-round.svg';
import illustration from '../../assets/images/Illustration.png';

import * as S from './styles';

type PaymentForms = 'credit-card' | 'debit' | 'money'

const CheckoutFilled: React.FC = () => {
  const [searchParams] = useSearchParams();

  const address = useMemo(() => searchParams.get('address'), [searchParams]);
  const addressComplement = useMemo(() => searchParams.get('addressComplement'), [searchParams]);

  const paymentForm = useMemo(() => {
    const paymentFormParam = searchParams.get('paymentForm') as PaymentForms;

    if (paymentFormParam === 'credit-card') return 'Cartão de Crédito';
    if (paymentFormParam === 'debit') return 'Cartão de Débito';
    if (paymentFormParam === 'money') return 'Em Dinheiro';
  }, [searchParams]);
  
  return (
    <S.Container>
      <span>Uhu! Pedido confirmado</span>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <S.ContainerGrid>
        <S.ContainerLeft>
          <S.ContainerLeftInformations>
            <S.ContainerLeftInformation>
              <img src={local} alt="" />
              <div>
                <span>Entrega em <b>{address}</b></span>
                <span>{addressComplement}</span>
              </div>
            </S.ContainerLeftInformation>
            <S.ContainerLeftInformation>
              <img src={time} alt="" />
              <div>
                <span>Previsão de entrega</span>
                <span><b>20 min - 30 min</b></span>
              </div>
            </S.ContainerLeftInformation>
            <S.ContainerLeftInformation>
              <img src={payment} alt="" />
              <div>
                <span>Pagamento na entrega</span>
                <span><b>{paymentForm}</b></span>
              </div>
            </S.ContainerLeftInformation>
          </S.ContainerLeftInformations>
        </S.ContainerLeft>

        <S.ContainerRight>
          <img src={illustration} alt="" />
        </S.ContainerRight>
      </S.ContainerGrid>
    </S.Container>
  );
}

export default CheckoutFilled;