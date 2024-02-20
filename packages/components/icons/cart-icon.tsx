import React from 'react';
import { iconClass } from './icon.css';

function CartIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const cls = className ? iconClass + ' ' + className : iconClass;
  return (
    <svg viewBox="0 0 24 24" className={cls} {...props}>
      <path d="M9 7H6.92013C6.40004 7 5.96678 7.39866 5.92359 7.91695L5.09025 17.917C5.04167 18.5 5.50176 19 6.0868 19H17.9132C18.4982 19 18.9583 18.5 18.9097 17.917L18.0764 7.91695C18.0332 7.39866 17.6 7 17.0799 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" />
    </svg>
  );
}

export default CartIcon;
