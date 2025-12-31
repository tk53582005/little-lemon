function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </section>
      
      <section className="specials">
        <h2>This week's specials!</h2>
        <div className="specials-list">
          <p>Our special dishes will be displayed here.</p>
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What our customers say</h2>
        <p>Customer testimonials will be displayed here.</p>
      </section>
      
      <section className="about">
        <h2>About Little Lemon</h2>
        <p>Learn more about our restaurant and our story.</p>
      </section>
    </div>
  );
}

export default Homepage;
