import './App.css'
import Advert from './Advert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdvertDetails from './components/AdvertDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Advert/>} />
        <Route path="/adverts/:id" element={<AdvertDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
