import React from 'react';
import { iconClass } from './icon.css';

function BurgerIcon({
  className,
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const cls = className ? iconClass + ' ' + className : iconClass;
  return (
    <svg viewBox="0 0 24 24" className={cls} {...props}>
      <path d="M12 4C17.2641 4 19.4492 5.71052 20.3563 7.13061C20.9508 8.06149 20.1046 9 19 9H5C3.89543 9 3.04915 8.06149 3.64374 7.13061C4.5508 5.71052 6.73593 4 12 4Z" />
      <path d="M3 18.5C3 17.6716 3.67157 17 4.5 17H19.5C20.3284 17 21 17.6716 21 18.5V18.5C21 19.3284 20.3284 20 19.5 20H4.5C3.67157 20 3 19.3284 3 18.5V18.5Z" />
      <path
        d="M21 12.6L20.3086 13.2568C19.5652 13.9631 18.4081 13.9926 17.6295 13.3253L16.8016 12.6156C16.0526 11.9737 14.9474 11.9737 14.1984 12.6156L13.3016 13.3844C12.5526 14.0263 11.4474 14.0263 10.6984 13.3844L9.80158 12.6156C9.0526 11.9737 7.9474 11.9737 7.19842 12.6156L6.37045 13.3253C5.5919 13.9926 4.4348 13.963 3.69138 13.2568L3 12.6"
        fill="none"
      />
    </svg>
  );
}

export default BurgerIcon;
