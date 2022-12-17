import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return(
    <S.ContainerButton {...rest}>
        <span>{title}</span>
    </S.ContainerButton>
  )
}

export default Button;