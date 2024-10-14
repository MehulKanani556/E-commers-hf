import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Womenstore from './darshan/pages/Womenstore';
import { Route, Routes } from 'react-router-dom';
import Minisider from './darshan/components/Minisider';
import Card from './darshan/components/Card';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/darshan" element={<Card />} />
        {/* <Route path="/vivek" element={<About />} /> */}
        {/* <Route path="/parth" element={<Contact />} /> */}
      </Routes>


    </div>
  );
}

export default App;