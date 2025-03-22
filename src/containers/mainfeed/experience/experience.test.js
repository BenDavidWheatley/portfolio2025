import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import Style from './experience.module.css';

describe('Renders the experience Component', () => {

  test('Renders the experience component', () => {
    render(<Experience />);
    const testId = screen.getAllByTestId('experience');
    testId.forEach((el) => {
      expect(el).toBeInTheDocument();
    })
    
  });
  
  test('Adds classname for styling', () => {
    render(<Experience />);
    const container = screen.getByTestId('experience');
    expect(container.className).toContain(Style.experienceContainer)
  })
});
