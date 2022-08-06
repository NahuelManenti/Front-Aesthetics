import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Checkout from './pages/Checkout'
import DetailsProducts from './components/DetailsProducts';
import News from './pages/News';
import Treatments from './pages/Treatments';
import {useDispatch} from "react-redux";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdminAddProductPage from './pages/AdminAddProductPage';
import AdminModifyProductPage from './pages/AdminModifyProductPage';
import AdminDeleteProductPage from './pages/AdminDeleteProductPage';
import AdminAddTreatmentPage from './pages/AdminAddTreatmentPage';
import AdminModifyTreatmentPage from './pages/AdminModifyTreatmentPage';
import AdminDeleteTreatmentPage from './pages/AdminDeleteTreatmentPage';
import AdminAddNewsPage from './pages/AdminAddNewsPage';
import AdminModifyNewsPage from './pages/AdminModifyNewsPage';
import AdminDeleteNewsPage from './pages/AdminDeleteNewsPage';
import ShippingPage from './pages/ShippingPage';
import userActions from './redux/actions/userActions';
import { useEffect } from 'react';
import productActions from './redux/actions/productActions';
import treatmentsActions from './redux/actions/treatmentsActions';

function App() {
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(productActions.getProducts())
    dispatch(treatmentsActions. getTreatments())
    if(localStorage.getItem('token')!== null) {
      const token = localStorage.getItem("token")
      dispatch(userActions.verifyToken(token))
    }
  // eslint-disable-next-line
  },[ ])


  return (
    <>
      <ScrollToTop
        style= {{backgroundColor:"rgb(75, 0, 130)", bottom: "110px"}}
            smooth
            viewBox="0 0 24 24"
            component= {<ArrowCircleUpIcon sx={{color: 'white'}}/>}
            // svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
            />
      <Routes >
        <Route path ="*" element={<Home/>}/>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path ='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<DetailsProducts/>}/>
        <Route path ='/news' element={<News/>}/>
        <Route path ='/treatments' element={<Treatments/>}/>
        <Route path ='/signin' element ={<SignIn/>}/>
        <Route path ='/signup' element ={<SignUp/>}/>
        <Route path ='/adminaddproduct' element ={<AdminAddProductPage/>}/>
        <Route path ='/adminmodifyproduct' element ={<AdminModifyProductPage/>}/>
        <Route path ='/admindeleteproduct' element ={<AdminDeleteProductPage/>}/>
        <Route path ='/adminaddtreatment' element ={<AdminAddTreatmentPage/>}/>
        <Route path ='/adminmodifytreatment' element ={<AdminModifyTreatmentPage/>}/>
        <Route path ='/admindeletetreatment' element ={<AdminDeleteTreatmentPage/>}/>
        <Route path ='/adminaddnews' element ={<AdminAddNewsPage/>}/>
        <Route path ='/adminmodifynews' element ={<AdminModifyNewsPage/>}/>
        <Route path ='/admindeletenews' element ={<AdminDeleteNewsPage/>}/>
        <Route path ='/shipping' element ={<ShippingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
