// Components

// Routes
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
import './components/NotFound/NotFound.css'
// import './components/Signin/Signin.css'
// Scroll To Top when change route
import AutoToTop from './components/AutoToTop';
import ScrolltoTop from './components/Scrolltotop/Scrolltotop'
// Components
import Home from './pages/Home';
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';
import Layout from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage'
// Layout




function App() {
  return (
    
      <Layout>
      <ScrolltoTop/>
      <AutoToTop />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/hotels' element={<Hotels />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </Layout>
    
  );
}

export default App;

