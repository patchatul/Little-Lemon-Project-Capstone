import { screen } from '@testing-library/react';
import BookingForm from './pages/BookingForm';

test('render submit form button', () => {
  render(<BookingForm />);
  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled');
});
