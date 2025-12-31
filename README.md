# Little Lemon Restaurant - Table Booking System

A React-based web application for booking tables at Little Lemon Restaurant.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dynamic Booking Form**: Real-time availability checking via API
- **Form Validation**: Comprehensive HTML5 and React validation
- **Booking Confirmation**: Clear confirmation page after successful booking
- **Accessibility**: WCAG compliant with semantic HTML and ARIA attributes

## Accessibility Features

- ✅ Semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ ARIA labels on all form inputs
- ✅ Keyboard navigation support
- ✅ Screen reader compatible
- ✅ Form labels properly associated with inputs
- ✅ Clear error messages and validation feedback
- ✅ Sufficient color contrast

## Technologies Used

- React 18
- React Router DOM
- Jest & React Testing Library
- HTML5 & CSS3
- API Integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Application
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running Tests
```bash
npm test
```

## Project Structure
```
little-lemon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Nav.js
│   │   ├── Main.js
│   │   ├── Footer.js
│   │   └── BookingForm.js
│   ├── pages/
│   │   ├── Homepage.js
│   │   ├── BookingPage.js
│   │   ├── ConfirmedBooking.js
│   │   └── ...
│   └── App.js
└── package.json
```

## Testing

The application includes comprehensive unit tests covering:
- Form validation
- API integration
- Component rendering
- User interactions

Total: 13 tests, 100% pass rate

## License

This project was created as part of the Meta Front-End Developer Capstone Project.
