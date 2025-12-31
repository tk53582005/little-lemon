import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <h2>Reserve a Table</h2>
      <p>Book your table at Little Lemon and enjoy our delicious Mediterranean cuisine.</p>
      <BookingForm 
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
