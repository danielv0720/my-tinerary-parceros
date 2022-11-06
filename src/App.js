// Components

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
import Home from './pages/Home';
import ScrolltoTop from './components/Scrolltotop/Scrolltotop'
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
      </Routes>
    </Layout>
  );
}

export default App;
