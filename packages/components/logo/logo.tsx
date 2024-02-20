import { logoClass, logoIconClass } from './logo.css';
import BurgerIcon from '../icons/burger-icon';

function Button(): JSX.Element {
  return (
    <div className={logoClass}>
      <BurgerIcon className={logoIconClass} />
    </div>
  );
}

export default Button;
