
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect
} from "react-router-dom";
import Home from './pages/home/home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
// import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={user ? <Home/> : <Register/>} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/login' element={user ? <Redirect to="/" />: <Login />} />
          <Route path='/register' element={user ? <Redirect to="/" />: <Login />}/>
          
        </Routes>
    </Router>

    
  );
}

export default App;
