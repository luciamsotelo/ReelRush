import './App.css';
import Home from "./pages/home_page";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import HookUp from './pages/hookUp_page';
import CastIn from './pages/castIn_page';
import FlyFinder from './pages/flyfinder_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path ="/hookUp" element={<HookUp/>} />
        <Route path ="/castIn" element={<CastIn/>} />
        <Route path ="/flyFinder" element={<FlyFinder/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
