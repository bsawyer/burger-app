import React from 'react';
import { iconClass } from './icon.css';

function MinusIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const cls = className ? iconClass + ' ' + className : iconClass;
  return (
    <svg viewBox="0 0 24 24" className={cls} {...props}>
      <path d="M17 12H7" fill="none" />
    </svg>
  );
}

export default MinusIcon;
