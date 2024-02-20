import type { ReactNode } from 'react';
import { gridClass } from './grid.css';

export interface GridProps {
  children?: ReactNode;
}

function Grid({ children }: GridProps): JSX.Element {
  return <div className={gridClass}>{children}</div>;
}

export default Grid;
