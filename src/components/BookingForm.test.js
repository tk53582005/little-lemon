import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // HTML5バリデーション属性のテスト
  test('Renders the BookingForm heading', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const headingElement = screen.getByText("Choose date *");
    expect(headingElement).toBeInTheDocument();
  });

  test('Date input has required attribute', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const dateInput = screen.getByLabelText(/Choose reservation date/i);
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('Date input has min attribute set to today', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const dateInput = screen.getByLabelText(/Choose reservation date/i);
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);
  });

  test('Guests input has min and max attributes', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('type', 'number');
  });

  test('Time select has required attribute', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const timeSelect = screen.getByLabelText(/Choose reservation time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Occasion select has required attribute', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const occasionSelect = screen.getByLabelText(/Select occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });

  // JavaScriptバリデーション関数のテスト
  test('Submit button is disabled when form is invalid (no date selected)', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const submitButton = screen.getByLabelText(/Make reservation/i);
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when form is valid', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const dateInput = screen.getByLabelText(/Choose reservation date/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitButton = screen.getByLabelText(/Make reservation/i);
    
    // 有効な日付を入力
    fireEvent.change(dateInput, { target: { value: '2025-12-31' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    
    expect(submitButton).toBeEnabled();
  });

  test('Form submission calls submitForm with correct data', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const dateInput = screen.getByLabelText(/Choose reservation date/i);
    const timeSelect = screen.getByLabelText(/Choose reservation time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const occasionSelect = screen.getByLabelText(/Select occasion/i);
    const submitButton = screen.getByLabelText(/Make reservation/i);
    
    // フォームに入力
    fireEvent.change(dateInput, { target: { value: '2025-12-31' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Anniversary' } });
    
    // フォーム送信
    fireEvent.click(submitButton);
    
    // submitFormが正しいデータで呼ばれたことを確認
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-12-31',
      time: '18:00',
      guests: 4,
      occasion: 'Anniversary'
    });
  });

  test('Date change dispatches UPDATE_TIMES action', () => {
    render(
      <BookingForm 
        availableTimes={mockAvailableTimes} 
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    
    const dateInput = screen.getByLabelText(/Choose reservation date/i);
    
    fireEvent.change(dateInput, { target: { value: '2025-12-31' } });
    
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      date: '2025-12-31'
    });
  });
});
