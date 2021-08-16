import { HTMLAttributes } from 'react';

import './styles.scss';

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  type: 'text';
}

export function InputText(props: InputTextProps) {
  return (
    <input className="input-text" {...props} />
  );
}
