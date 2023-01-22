import './App.css';
//import components
import HomePage from './Pages/HomePage';
import ListingsPage from './Pages/HomePage';
//import Navbar2 from './Components/Navbar2';
//import Navbar2 from './Components/nav/Navbar2';
//import routing
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

// function App() {
//   let navigate = useNavigate
//   return (
//     < >
//       <BrowserRouter navigate={navigate}>
//         <HomePage/>
//       </BrowserRouter>
//     </>
//   );
// }

function App() {
  let navigate = useNavigate
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingsPage />} />
    </Routes>
  );
}

export default App;