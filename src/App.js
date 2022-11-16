// Components


// Routes
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
import './components/NotFound/NotFound.css'
import './components/Signin/Signin.css'
import './components/DescriptionHotel/HotelPage.css'
/* import './components/Hotels/Hotels.css' */
import './components/NewHotel/NewHotel.css'
// import './components/Hotels/Hotels.css'
// Scroll To Top when change route
import AutoToTop from './components/AutoToTop';
import ScrolltoTop from './components/Scrolltotop/Scrolltotop'
// Components
import Home from './pages/Home';
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';// 
import Layout from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage'
import SignUp from './pages/SignUp';
import SigninPage from './pages/SigninPage';

import { HotelPage } from './components/DescriptionHotel/HotelPage';
import NewHotelPage from './pages/NewHotelPage';
import DetailCity  from './pages/DetailCity';
import NewCity from './pages/NewCity/NewCity';
import HotelDetail from './pages/HotelDetail/HotelDetail';
// Layout




function App() {
  return (
    
      <Layout>
      <ScrolltoTop/>
      <AutoToTop />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/hotels' element={<Hotels />}/>
        <Route path='/hotel/:id' element={<HotelPage />}/>
        <Route path='/newhotel' element={<NewHotelPage/>}/>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/signUp' element={< SignUp/>}/>
        <Route path='/city/:idCity' element={<DetailCity/>}/>
        <Route path='/newcity' element={<NewCity/>}/>
        <Route path='/hotels/:idDetail' element={<HotelDetail/>}/>
      </Routes>
    </Layout>
    
  );
}

export default App;

