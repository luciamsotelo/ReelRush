import './App.css';
import Home from "./pages/home_page";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import HookUp from './pages/hookUp_page';
import CastIn from './pages/castIn_page';
import FlyFinder from './pages/flyfinder_page';
import AboutUs from './pages/about_page';
import Contact from './pages/contact_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path ="/hookUp" element={<HookUp/>} />
        <Route path ="/castIn" element={<CastIn/>} />
        <Route path ="/flyFinder" element={<FlyFinder/>} />
        <Route path ="/aboutUs" element={<AboutUs/>} />
        <Route path ="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
