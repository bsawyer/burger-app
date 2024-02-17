import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>hello</Button>);
    expect(getByText('hello')).toBeTruthy();
  });
});
