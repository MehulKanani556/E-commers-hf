import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Womenstore from './darshan/pages/Womenstore';
import WomenDetails from './darshan/pages/WomenDetails';
import Home from './Vivek/Component/Home/Home'
import Electronics from './Parth/Component/Electronics/Electronics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beauty from './Parth/Component/Beauty/Beauty';
import Womenfilter from './darshan/pages/Womenfilter';
import ContactUs from './Parth/Component/ContactUs/ContactUs';
import AboutUs from './Parth/Component/ContactUs/AboutUs';
import Luggage from './Parth/Component/Luggage/Luggage';
import Sports from './Parth/Component/Sports/Sports';
// import User from './Vivek/Component/User/User';
// import UserProfile from './Vivek/Component/User/UserProfile'
// import MyOrder from './Vivek/Component/User/MyOrder';
// import UserFaq from './Vivek/Component/User/UserFaq';
import HelpSupport from './Parth/Component/HelpSupprt/HelpSupport';
// import UserAddress from './Vivek/Component/User/UserAddress';
// import UserDeactive from './Vivek/Component/User/UserDeactive';
// import TermOfServices from './Vivek/Component/User/TermOfServices'
// import UserpaymentMethod from './Vivek/Component/User/UserpaymentMethod';
// import UserUpiPayment from './Vivek/Component/User/UserUpiPayment';
import Wishlist from './Vivek/Component/Wishlist/Wishlist';
import Profile from './darshan/pages/Profile';

// import GooglepayUPIMethod from './Vivek/Component/User/GooglepayUPIMethod'
import TrackOrder from './Vivek/Component/User/TrackOrder';
import TrackRefund from './Vivek/Component/User/TrackRefund';
import MyOrderwithTracking from './Vivek/Component/User/MyOrderwithTracking';
import TrackReturnRefund from './Vivek/Component/User/TrackReturnRefund';
import RateReview from './Vivek/Component/User/RateReview';
import Combined from './Vivek/Component/User/Combined';

import Cart from './Dhruvin/Components/Cart/Cart';
import Invoice from './Dhruvin/Components/Cart/Invoice';
import Electronicdetails from './darshan/pages/Electronicdetails';
import User from './Vivek/Component/User/User';
import UserProfile from './Vivek/Component/User/UserProfile';
import UserpaymentMethod from './Vivek/Component/User/UserpaymentMethod';
import GooglepayUPIMethod from './Vivek/Component/User/GooglepayUPIMethod';
import MyOrder from './Vivek/Component/User/MyOrder';
import UserFaq from './Vivek/Component/User/UserFaq';
import TermOfServices from './Vivek/Component/User/TermOfServices';
import UserDeactive from './Vivek/Component/User/UserDeactive';
import UserAddress from './Vivek/Component/User/UserAddress';
import Category from './Vivek/Component/Home/Category';
import Product from './Vivek/Component/Home/Product';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <CartProvider>
          <Routes>

            {/* home page */}
            <Route path='/' element={<Home />} />

            {/* electronics */}
            <Route path='/electronics' element={<Electronics />} />

            {/* beauty */}
            <Route path="/beauty" element={<Beauty />} />

            {/* women */}
            <Route path='/women' element={<Womenstore />} />
            <Route path='/womenstore' element={<Womenfilter />} />
            <Route path='/womendetails/:productId' element={<WomenDetails />} />
            <Route path='/electronicdetails' element={<Electronicdetails />} />

            <Route path='/category/:id' element={<Category />} />
            <Route path='/product/:id' element={< Product />} />

            {/* Profile */}
            <Route path='/profile' element={<Profile />} />

            {/* about us */}
            <Route path="/about" element={<AboutUs />} />

            {/*contact us  */}
            <Route path="/contact" element={<ContactUs />} />

            {/* luggage */}
            <Route path="/luggage" element={<Luggage />} />

            {/* sport */}
            <Route path="/sports" element={<Sports />} />

            {/* HELP  */}
            <Route path="/help" element={<HelpSupport />} />

            {/* wishlist */}
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/trackorder/:id" element={<TrackOrder />} />

            <Route path='/trackrefund/:id' element={<TrackRefund />} />
            <Route path='/myordertrack/:id' element={<MyOrderwithTracking />} />

            <Route path='/returnrefund/:id' element={<TrackReturnRefund />} />
            <Route path='/ratereview' element={<RateReview />} />
            <Route path='/combine' element={<Combined />} />
            {/* User */}
            <Route path="/user" element={<User />}>
              <Route path='profile' element={<UserProfile />} />
              <Route path='payment' element={<UserpaymentMethod />} />
              <Route path='payment/upi' element={<GooglepayUPIMethod />} />
              <Route path='myorder' element={<MyOrder />} />
              <Route path='faqs' element={<UserFaq />} />

              <Route path='term' element={<TermOfServices />} />
              <Route path='deactive' element={<UserDeactive />} />
              <Route path='address' element={<UserAddress />} />
            </Route>

            {/* Cart  */}

            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/invoice/:id" element={<Invoice />}></Route>


          </Routes>
        </CartProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;