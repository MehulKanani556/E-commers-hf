import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Womenstore from './darshan/pages/Womenstore';
import Home from './Vivek/Component/Home/Home'
import Electronics from './Parth/Component/Electronics/Electronics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beauty from './Parth/Component/Beauty/Beauty';
import Womenfilter from './darshan/pages/Womenfilter';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/darshan' element={<Womenfilter />} />
          <Route path='/parth' element={<Beauty />} />
          <Route path='/vivek' element={<Home />} />
          <Route path="/parth/Beauty" element={<Beauty />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;