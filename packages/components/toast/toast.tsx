import type { ReactNode } from 'react';
import { toastClass, toastActiveClass } from './toast.css';

export interface ToastProps {
  children?: ReactNode;
  active?: boolean;
  divRef: React.Ref<HTMLDivElement>;
}

function Toast({ children, active = false, divRef }: ToastProps): JSX.Element {
  return (
    <div
      ref={divRef}
      className={toastClass + (active ? ' ' + toastActiveClass : '')}
    >
      {children}
    </div>
  );
}

export default Toast;
