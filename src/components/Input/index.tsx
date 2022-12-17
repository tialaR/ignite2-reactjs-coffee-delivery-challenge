import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { BaseInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
}

const Input: React.FC<InputProps> = ({register, name, ...rest}) => {
  return (
    <BaseInput {...register(name)} {...rest} />
  );
}

export default Input;