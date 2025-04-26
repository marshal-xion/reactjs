import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css'

// Default props for customization
const App = ({ initialCount = 0, buttonText = 'Click me' }) => {
  // State to track button clicks
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState('');

  // Handle button click
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(`Button clicked ${newCount} time${newCount === 1 ? '' : 's'}!`);
    // Clear message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
  };

  // Reset counter
  const handleReset = () => {
    setCount(initialCount);
    setMessage('Counter reset!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="app-container">
      <h1>Click Counter</h1>
      <p>Current count: {count}</p>
      {message && <p role="status" className="feedback-message">{message}</p>}
      <button
        onClick={handleClick}
        aria-label={`Click to increment count, current count is ${count}`}
        className="click-button"
      >
        {buttonText}
      </button>
      <button
        onClick={handleReset}
        disabled={count === initialCount}
        aria-label="Reset counter"
        className="reset-button"
      >
        Reset
      </button>
    </div>
  );
};

// PropTypes for type checking
App.propTypes = {
  initialCount: PropTypes.number,
  buttonText: PropTypes.string,
};

export default App;
