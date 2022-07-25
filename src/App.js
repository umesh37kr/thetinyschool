import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutTSS from './pages/AboutTSS'
import Contact from './pages/Contact';
import Admission from './pages/Admission';
import EventsGallery from './pages/EventsGallery';
import Login from './pages/Login';
function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/about' element={<AboutTSS />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/admission' element={<Admission />}/>
            <Route path='/events-gallery' element={<EventsGallery />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
