// Components

import Home1 from './pages/Home1'
import Home2 from './components/Home2/Home2.jsx'
// Routes
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
import './components/NotFound/NotFound.css'
// import './components/Signin/Signin.css'
// Scroll To Top when change route
import AutoToTop from './components/AutoToTop';
// Components
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';
import Layout from './layout/Layout';
import NotFoundPage from './pages/NotFoundPage';
// import SigninPage from './pages/SigninPage';


// Layout




function App() {
  return (
    <Layout>
      <AutoToTop />
      <Routes>
        <Route path='/' exact element={<Home1 />}/>
        <Route path='/' exact element={<Home2 />}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/hotels' element={<Hotels />}/>
        <Route path='*' element={<NotFoundPage />}/>
        {/* <Route path='/Signin' element={<SigninPage/>}/> */}
        
      </Routes>
    </Layout>
    
  );
}

export default App;

