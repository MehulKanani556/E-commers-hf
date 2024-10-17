import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Womenstore from './darshan/pages/Womenstore';
import Home from './Vivek/Component/Home/Home'
import Electronics from './Parth/Component/Electronics/Electronics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Beauty from './Parth/Component/Beauty/Beauty';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/darshan' element={<Womenstore />} />
          <Route path='/parth' element={<Electronics />} />
          <Route path='/vivek' element={<Home />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;