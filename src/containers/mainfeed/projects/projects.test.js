
 import { render, screen, fireEvent } from '@testing-library/react';
import Project from './Projects';
import Style from './projects.module.css';

describe('The project Component', () => {

  test('renders the projects component', () => {
    render(<Project />);
    const testId = screen.getByTestId('project');
    expect(testId).toBeInTheDocument();
  });

  //Updated test to check for multiple
  test('renders the images container', () => {
    render(<Project />);
    const testId = screen.getAllByTestId('images');
    testId.forEach((el) => {
      expect(el).toBeInTheDocument();
    })
  });

  test('renders the languages container', () => {
    render(<Project />);
    const testId = screen.getAllByTestId('languages'); //Important that we getAll not just get
    testId.forEach((el) => {
      expect(el).toBeInTheDocument();
  });
    
  });

  test('Checks for style class name', () => {
    render(<Project />);
    const container = screen.getByTestId('project');
    expect(container.className).toContain(Style.projectContainer);
  });

  test('Project applies correct className based on hover state', () => {
    render(<Project />);
    
    //Note - Updated the test to now loop through an array as the languages container will be dynamic and can have any number

    // Assert initial class when isHovered = false
    const languagesElement = screen.getAllByTestId('languages');
    languagesElement.forEach((el) => {
        expect(el).toHaveClass(Style.NotHovered);
        expect(el).not.toHaveClass(Style.hovered);
    });

    // Simulate hover. 
    fireEvent.mouseEnter(screen.getByTestId('project'));
    languagesElement.forEach((el) => {
      expect(el).toHaveClass(Style.hovered);
      expect(el).not.toHaveClass(Style.NotHovered);
  });

    // Simulate mouse leave
    fireEvent.mouseLeave(screen.getByTestId('project'));
    languagesElement.forEach((el) => {
      expect(el).toHaveClass(Style.NotHovered);
      expect(el).not.toHaveClass(Style.hovered);
  });
  });
});
