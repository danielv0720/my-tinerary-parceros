// Components
import Navbar from './components/Navbar';
import Home1 from './pages/Home1'
// Routes
import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
// Scroll To Top when change route
import AutoToTop from './components/AutoToTop';
// Components
import Cities from './pages/Cities';
import Hotels from './pages/Hotels';
import Layout from './layout/Layout';

// Layout




function App() {
  return (


    <Layout>
      <AutoToTop />
      <Routes>
        <Route path='/' exact element={<Home1 />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/hotels' element={<Hotels />} />
      </Routes>
    </Layout>

  );
}

export default App;
