import { Routes, Route, useNavigate } from 'react-router-dom';


function MyButton() {

    const navigate = useNavigate(); // Hook to navigate programmatically
  
   
  
    return (
    <div className="about-container">
        <h2> Now you should go back</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
    </div>
        
    );
  
  }





export default function About() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the About page of my app.</p>

        <Routes>
          <Route path="/" element={<MyButton />} />
          <Route path="/about" element={<About />} />
        </Routes>


      </div>
    );
  }