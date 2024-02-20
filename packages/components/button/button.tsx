import type { ReactNode } from 'react';
import { buttonClass, buttonVariant } from './button.css';

export interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'primaryAlt' | 'secondary' | 'icon' | 'iconAlt';
  type?: 'button' | 'submit';
}

function Button({
  children,
  variant,
  type = 'submit',
}: ButtonProps): JSX.Element {
  let buttonVar = '';
  if (variant && buttonVariant[variant]) {
    buttonVar = ' ' + buttonVariant[variant];
  }
  return (
    <button className={buttonClass + buttonVar} type={type}>
      {children}
    </button>
  );
}

export default Button;
