import { render, screen } from '@testing-library/react';
import About from './About';
import Style from './about.module.css';

describe('About Component', () => {
  test('renders the about me container', () => {
    render(<About />);
    const testId = screen.getByTestId('about');
    expect(testId).toBeInTheDocument();
  });

  test('Checks for classname for the css file', () =>{
    render(<About />);
    const container = screen.getByTestId('about');
    expect(container.className).toContain(Style.aboutContainer);
  })
});