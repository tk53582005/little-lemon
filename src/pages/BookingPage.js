function BookingPage() {
  return (
    <div className="booking-page">
      <h2>Reserve a Table</h2>
      <p>Book your table at Little Lemon.</p>
      <form>
        <label htmlFor="date">Choose date:</label>
        <input type="date" id="date" name="date" />
        
        <label htmlFor="time">Choose time:</label>
        <select id="time" name="time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" id="guests" name="guests" min="1" max="10" />
        
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion" name="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
        </select>
        
        <button type="submit">Make Your Reservation</button>
      </form>
    </div>
  );
}

export default BookingPage;
