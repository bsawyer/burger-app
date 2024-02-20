import React from 'react';
import { iconClass } from './icon.css';

function BackIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const cls = className ? iconClass + ' ' + className : iconClass;
  return (
    <svg viewBox="0 0 24 24" className={cls} {...props}>
      <path d="M8 17L3 12M3 12L8 7M3 12H21" fill="none" />
    </svg>
  );
}

export default BackIcon;
