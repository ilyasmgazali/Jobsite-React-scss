import './App.css';
//import components
import Homepage from './Pages/Homepage/Homepage';
//import Navbar2 from './Components/Navbar2';
import Navbar2 from './Components/Navbar2';
//import routing
import { BrowserRouter, useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate
  return (
    < >
      <BrowserRouter navigate={navigate}>
        <Homepage/>
      </BrowserRouter>
    </>
  );
}

export default App;