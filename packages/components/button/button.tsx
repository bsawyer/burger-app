import type { ReactNode } from 'react';
import { buttonStyle } from './button.css';

export interface ButtonProps {
  children?: ReactNode;
}

function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button className={buttonStyle} type="submit">
      {children}
    </button>
  );
}

export default Button;
