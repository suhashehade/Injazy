import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      
          <Routes>
            <Route path='/' element={  <><Navbar /> <Home /></>} />
            <Route path='/login' element={ <Login />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
