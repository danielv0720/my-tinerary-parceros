// Components

// Routes
import { Routes, Route } from "react-router-dom";
// Styles
import "./App.css";
import "./components/NotFound/NotFound.css";

import "./components/NewHotel/NewHotel.css";
// import './components/Hotels/Hotels.css'
// Scroll To Top when change route
import AutoToTop from "./components/AutoToTop";
import ScrolltoTop from "./components/Scrolltotop/Scrolltotop";
// Components

import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Hotels from "./pages/Hotels"; //
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";

import SignUp from "./pages/SignUp";
import SigninPage from "./pages/SigninPage";

import { HotelPage } from "./components/DescriptionHotel/HotelPage";
import NewHotelPage from "./pages/NewHotelPage";

import DetailCity from "./pages/DetailCity";
import NewCity from "./pages/NewCity/NewCity";
import MyCities from "./pages/MyCities";
import MyItinerary from "./pages/MyItinerary";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import { useEffect, useState } from "react";
import { startSaveCities, startSaveMyCities } from "./redux/actions/cityAction";
import { useDispatch } from "react-redux";
import UpdateCity from "./components/UpdateCity/UpdateCity";
import { startSaveMyItineraries } from "./redux/actions/itineraryAcion";
import UpdateItinerary from "./components/UpdateItinery/UpdateItinerary";
import { ProtectedRoute } from "./components/ProtectRoute/ProtectedRoute";
import { login, logout } from "./redux/actions/userAction";
import Swal from "sweetalert2";
import NewItinerary from "./pages/NewItinerary/NewItinerary";
// Layout

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
import MyCities from './pages/MyCities';
import MyItinerary from './pages/MyItinerary';
import HotelDetail from './pages/HotelDetail/HotelDetail';
import { useEffect, useState } from 'react';
import { startSaveCities, startSaveMyCities } from './redux/actions/cityAction';
import { useDispatch } from 'react-redux';
import UpdateCity from './components/UpdateCity/UpdateCity';
import { startSaveMyItineraries } from './redux/actions/itineraryAcion';
import UpdateItinerary from './components/UpdateItinery/UpdateItinerary';

import { ProtectedRoute } from './components/ProtectRoute/ProtectedRoute';

import MyHotel from './pages/MyHotel/MyHotel';
import HotelEdit from './pages/HotelEdit/HotelEdit';
import MyShows from './pages/MyShows/MyShows';
import ShowEdit from './pages/ShowEdit/ShowEdit';
import Profile from './pages/Profile/Profile';




function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startSaveCities());
    dispatch(startSaveMyCities("636e8c06ce259ab0ebdb9813"));
    dispatch(startSaveMyItineraries("636e8c06ce259ab0ebdb9813"));
  }, [dispatch]);

  const [user, setUser] = useState(null);

  const startLogin = () => {
    setUser({
      id: 1,
      name: "daniel",
      role: ["admin"],
    });

    dispatch(
      login({
        id: 1,
        name: "Daniel Velez",
        role: ["admin"],
        photo: "https://images.pexels.com/photos/12276196/pexels-photo-12276196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      })
    );
  };

  const startLogout = () => { 
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        setUser(null)
        dispatch(
          logout()
        );
      }
    });


  };

  return (
    <Layout>
      {user ? (
        <button onClick={startLogout}>logout</button>
      ) : (
        <button onClick={startLogin}>login</button>
      )}
      <ScrolltoTop />
      <AutoToTop />
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/city/:idCity" element={<DetailCity />} />
        <Route path="/hotels/:idDetail" element={<HotelDetail />} />
        <Route path="/updatecity/:id" element={<UpdateCity />} />
        <Route path="/updateitineraries/:id" element={<UpdateItinerary />} />

        <Route
          path="/mycities"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role.includes("admin")}
              reDirect={"/"}
            >
              <MyCities />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myitineraries"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role.includes("admin")}
              reDirect={"/"}
            >
              <MyItinerary />
            </ProtectedRoute>
          }
        />

        <Route
          path="/newcity"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role.includes("admin")}
              reDirect={"/"}
            >
              <NewCity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newitinerary"
          element={
            // <ProtectedRoute
            //   isAllowed={!!user && user.role.includes("admin")}
            //   reDirect={"/"}
            // >
              <NewItinerary />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/newhotel"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role.includes("admin")}
              reDirect={"/"}
            >
              <NewHotelPage />
            </ProtectedRoute>
          }
        />

        <Route path='/' exact element={<Home />}/>
        <Route path='/cities' element={<Cities />}/>
        <Route path='/hotels' element={<Hotels />}/>
        <Route path='/hotel/:id' element={<HotelPage />}/>
        <Route path='/signin' element={<SigninPage/>}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/signUp' element={< SignUp/>}/>
        <Route path='/city/:idCity' element={<DetailCity/>}/>
        <Route path='/hotels/:idDetail' element={<HotelDetail/>}/>
        <Route path='/profile' element={ <Profile/> } />

        <Route path='/updatecity/:id' element={<UpdateCity/>}/>
        <Route path='/updateitineraries/:id' element={<UpdateItinerary/>}/>

        
        <Route path='/mycities' element={
          <ProtectedRoute isAllowed={!!user && user.role.includes('admin')} reDirect={'/'}>
            <MyCities/>
            </ProtectedRoute>
            }/>
          
        <Route path='/myitineraries' element={
        <ProtectedRoute isAllowed={!!user && user.role.includes('admin')} reDirect={'/'}>
        <MyItinerary/>
        </ProtectedRoute>
        }/>

        <Route path='/newcity' element={
          <ProtectedRoute isAllowed={!!user && user.role.includes('admin')} reDirect={'/'}>
        <NewCity/>
        </ProtectedRoute>
        }/>
        <Route path='/newhotel' element={
        <ProtectedRoute isAllowed={!!user && user.role.includes('admin')} reDirect={'/'}>
        <NewHotelPage/>
        </ProtectedRoute>
        }/>
        


        <Route path='/hotelsAdmin' element={<MyHotel/>}/>
        <Route path='/hotelsAdmin/:id' element={<HotelEdit/>}/>
        <Route path='/showsUser' element={<MyShows/>}/>
        <Route path='/showsUser/:id' element={<ShowEdit/>}/>


      </Routes>
    </Layout>
  );
}

export default App;
