import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const dispatch = jest.fn();
  
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
