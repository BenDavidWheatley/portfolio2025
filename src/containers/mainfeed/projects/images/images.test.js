import { render, screen } from '@testing-library/react';
import Images from './Images';

describe('The images Component', () => {
  test('renders the images component', () => {
    render(<Images />);
    const testId = screen.getByTestId('images');
    expect(testId).toBeInTheDocument();
  });
});
