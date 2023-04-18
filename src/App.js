import logo from './logo.svg';
import './App.css';
import Doctors from './components/Doctors';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appointment from './components/Appointment';
import Detail from './components/Detail';
import Home from './Home';
import BloodBank from './components/BloodBank';
import Ambulance from './components/Ambulance';
import Register from './components/login/signup';
import Login from './components/login/login';
import MakeAppointment from './components/makeAppointment';
import Prescriptions from './components/Prescriptions';
import PresDetails from './components/PresDetails';
import Logout from './components/login/logout';
import Proflile from './components/proflile';
import BookedAmbulances from './components/bookedAmbulance';



function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/bloodbanks' element={<BloodBank/>} />
        <Route path='/ambulances' element={<Ambulance/>} />
        <Route path='/prescriptions/:pid' element={<Prescriptions/>} />
        <Route path='/details/:id' element={<Detail/>} />
        <Route path='/bookappointment/:id' element={<MakeAppointment/>} />
        <Route path='/prescription/details/:id' element={<PresDetails/>} />
        <Route path='/appointments/:pid' element={<Appointment/>} />
        <Route path='/ambulances/booked' element={<BookedAmbulances/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='profile' element={<Proflile/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );


}


export default App;
