import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/bootstrap.min.css';
import '../css/tiny-slider.css';
import '../css/style.css';
import Index from './assets/components/Index/Index';
import { Route, Routes, Navigate } from 'react-router-dom';
import Services from './assets/components/Services/Services';
import SignUpSignInForm from './assets/components/Login/Login';
import About from './assets/components/About/About';
import Blog from './assets/components/Blog/Blog';
import Cart from './assets/components/Cart/Cart';
import Checkout from './assets/components/Checkout/Checkout';
import ContactPage from './assets/components/Contact/Contact';
import Shop from './assets/components/Shop/Shop';
import Thankyou from './assets/components/Thankyou/Thankyou';
import { Context } from './assets/components/Context/Context';
import { useState } from 'react';
import ProductPage from './assets/components/Productpage/ProductPage';


function App() {
  
  const [userdata, setuserdata] = useState({});
  const [productname,setproductname] = useState({});


  return (
    
    <>
    <Context.Provider value = {{userdata,setuserdata, productname,setproductname} }>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/login' element={<SignUpSignInForm/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>

      </Routes>
    </Context.Provider>
    </>
  )
}

export default App;

