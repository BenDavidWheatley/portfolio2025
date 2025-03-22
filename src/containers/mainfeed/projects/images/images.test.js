import { render, screen } from '@testing-library/react';
import Images from './Images';
import Style from './images.module.css';

describe('The images Component', () => {
  test('renders the images component', () => {
    render(<Images />);
    const testId = screen.getByTestId('images');
    expect(testId).toBeInTheDocument();
  });

  test('Checks for style class name', () => {
    render(<Images />);
    const container = screen.getByTestId('images');
    expect(container.className).toContain(Style.imageContainer);
  });
});
