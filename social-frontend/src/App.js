
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import Home from './pages/home/home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
// import PersonIcon from '@mui/icons-material/Person';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
       <Routes>
          <Route path='/' element={user ? <Home/> : <Register/>} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/login' element={user ? <Navigate to="/" />: <Login />} />
          <Route path='/register' element={user ? <Navigate to="/" />: <Login />}/>
          
        </Routes>
    </Router>

    
  );
}

export default App;
