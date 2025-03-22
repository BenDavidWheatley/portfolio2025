import { render, screen } from '@testing-library/react';
import Mainfeed from './Mainfeed';
import Style from './mainfeed.module.css';

describe('Mainfeed Component', () => {

  test('renders the Mainfeed component', () => {
    render(<Mainfeed />); // Render the component first before querying the element
    const testId = screen.getByTestId('mainfeed');
    expect(testId).toBeInTheDocument();
  });

  test('renders the about me section', () =>  {
    render(<Mainfeed />);
    const testId = screen.getByTestId('about')
    expect(testId).toBeInTheDocument();
  });

  test('Renders the project tiles', () => {
    render(<Mainfeed />);
    const testId = screen.getAllByTestId('project');
    testId.forEach((el) => {
      expect(el).toBeInTheDocument();
    })

  });

  test('Renders the experience tiles', () => {
    render(<Mainfeed />);
    const testId = screen.getAllByTestId('experience');
    testId.forEach((el) => {
      expect(el).toBeInTheDocument();
    })
  });

  test('Applies the class for styling the mainfeed component', () => {
    render(<Mainfeed />);
    const container= screen.getByTestId('mainfeed');
    expect(container.className).toContain(Style.mainFeedContainer);
  })

});
