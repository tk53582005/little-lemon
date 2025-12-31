import { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // 今日の日付を取得(過去の日付を選択できないようにする)
  const today = new Date().toISOString().split('T')[0];

  // フォームが有効かどうかをチェック
  const isFormValid = () => {
    return date && time && guests >= 1 && guests <= 10 && occasion;
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 追加のバリデーション
    if (!isFormValid()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion
    };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date *</label>
      <input 
        type="date" 
        id="res-date" 
        value={date}
        min={today}
        onChange={handleDateChange}
        required
        aria-label="Choose reservation date"
      />
      
      <label htmlFor="res-time">Choose time *</label>
      <select 
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Choose reservation time"
      >
        {availableTimes.length > 0 ? (
          availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))
        ) : (
          <option>No available times</option>
        )}
      </select>
      
      <label htmlFor="guests">Number of guests *</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
        aria-label="Number of guests"
      />
      <small style={{ marginTop: '-15px', color: '#666' }}>
        Between 1 and 10 guests
      </small>
      
      <label htmlFor="occasion">Occasion *</label>
      <select 
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Select occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>
      
      <button 
        type="submit" 
        disabled={!isFormValid()}
        style={{
          padding: '10px',
          backgroundColor: isFormValid() ? '#F4CE14' : '#ccc',
          color: isFormValid() ? '#495E57' : '#666',
          border: 'none',
          borderRadius: '4px',
          cursor: isFormValid() ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
        aria-label="Make reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
