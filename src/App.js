import './App.css';
//import components
import HomePage from './Pages/HomePage';
import ApplyPage from './Pages/ApplyPage';
import ApplicationPage from './Pages/ApplicationPage';
import ListingsPage from './Pages/ListingsPage'
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NotificationPage from './Pages/NotificationPage';
import ProfilePage from './Pages/ProfilePage';
import SavedJobPage from './Pages/SavedJobPage';
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
      <Route path="/applications" element={<ApplicationPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/saved-jobs" element={<SavedJobPage />} />
    </Routes>
  );
}

export default App;