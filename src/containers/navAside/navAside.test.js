import { render, screen } from '@testing-library/react';
import NavAside from './NavAside';
import { Provider } from 'react-redux';
import Style from './navAside.module.css';

describe('The navasideComponent', () => {
  test('renders the aside that holds the header, footer and navigation', () => {
    render(<NavAside />);
    const testId = screen.getByTestId('navaside');
    expect(testId).toBeInTheDocument();
  });

  test('renders the header component', () => {
    render(
        <NavAside />
    );
    const testId = screen.getByTestId('header');
    expect(testId).toBeInTheDocument();
  });

  test('renders the navigation component', () => {
    render(
        <NavAside />
    );
    const testId = screen.getByTestId('navigation');
    expect(testId).toBeInTheDocument();
  });

  test('renders the footer component', () => {
    render(<NavAside />);
    const testId = screen.getByTestId('footer');
    expect(testId).toBeInTheDocument();

  })

  test('Applies the class for styling the nav component', () => {
    render(<NavAside />);
    const container= screen.getByTestId('navaside');
    expect(container.className).toContain(Style.navAsideContainer);
  })

  
});
