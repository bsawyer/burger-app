import type { ReactNode } from 'react';
import { cardClass, cardActiveClass } from './card.css';

export interface CardProps {
  children?: ReactNode;
  variant?: 'active';
}

function Card({ children, variant }: CardProps): JSX.Element {
  return (
    <div className={cardClass + (variant ? ' ' + cardActiveClass : '')}>
      {children}
    </div>
  );
}

export default Card;
