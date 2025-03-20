import { render, screen } from '@testing-library/react';
import Project from './Projects';

describe('The project Component', () => {
  test('renders the projects component', () => {
    render(<Project />);
    const testId = screen.getByTestId('project');
    expect(testId).toBeInTheDocument();
  });
});
