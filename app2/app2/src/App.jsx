import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './about';

function MyButton() {

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleClick = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <div className="button-container">
      <h1> Hello there this is the home page </h1>
      <button onClick={handleClick}>Click me</button>
    </div>

      
  );

}

// react component starts with a capital letter so MyButton M is capital for tag

export default function MyApp(){
  return (
      <div className="app-container">
          <header>Vite+React framework examples</header>
          

        <Routes>
          <Route path="/" element={<MyButton />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h2>UHOH! Absurd path.. go back</h2>} />
        </Routes>

      </div>
  );
}