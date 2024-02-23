import React from 'react';
import { iconClass } from './icon.css';

function PlusIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const cls = className ? iconClass + ' ' + className : iconClass;
  return (
    <svg viewBox="0 0 24 24" className={cls} {...props}>
      <path d="M12 6V18M18 12H6" fill="none" />
    </svg>
  );
}

export default PlusIcon;
