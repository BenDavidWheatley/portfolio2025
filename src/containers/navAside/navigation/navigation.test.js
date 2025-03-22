import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import Style from './navigation.module.css';

describe('The languages Component', () => {

  test('renders the navigation bar', () => {
    render(<Navigation />);
    const testId = screen.getByTestId('navigation');
    expect(testId).toBeInTheDocument();
  });
  test('Adds a classname for styling', () => {
    render(<Navigation />);
    const container = screen.getByTestId('navigation');
    expect(container.className).toContain(Style.navigationContainer)
  })
  
});
