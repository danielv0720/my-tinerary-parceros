// Components

// Routes
import { Routes, Route, useNavigate } from "react-router-dom";
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
import NewCity from "./components/NewCity/NewCity";
import MyCities from "./pages/MyCities";
import MyItinerary from "./pages/MyItinerary";
import HotelDetail from "./components/HotelDetail/HotelDetail";
import { useEffect } from "react";
import { startSaveCities, startSaveMyCities } from "./redux/actions/cityAction";
import { useDispatch, useSelector } from "react-redux";
import UpdateCity from "./components/UpdateCity/UpdateCity";
import { startSaveMyItineraries } from "./redux/actions/itineraryAcion";
import UpdateItinerary from "./components/UpdateItinery/UpdateItinerary";
import { ProtectedRoute } from "./components/ProtectRoute/ProtectedRoute";
import userActions from "./redux/actions/userAction";
import Swal from "sweetalert2";

import NewItinerary from "./components/NewItinerary/NewItinerary.jsx";

import MyHotel from "./pages/MyHotel/MyHotel";
import HotelEdit from "./pages/HotelEdit/HotelEdit";
import MyShows from "./pages/MyShows/MyShows";
import ShowEdit from "./pages/ShowEdit/ShowEdit";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";

import NewShow from "./pages/NewShow/NewShow";
import Myreactions from "./pages/Myreactions";
import { startSaveMyReactions } from "./redux/actions/reactionAction";
import NewReaction from "./components/Newreaction/NewReaction";

function App() {
  const user = useSelector(state => state.users)
  const navigate = useNavigate()
  const { reEnter, logout } = userActions;
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");

  useEffect(() => {
    console.log("TOKEN APP", token);
    if (token) {
      dispatch(reEnter(token));
    }
  }, [dispatch, token, reEnter]);


  useEffect(() => {
    if (user.id) {
      dispatch(startSaveCities());
      dispatch(startSaveMyCities(user.id));
      dispatch(startSaveMyItineraries(user.id));
      dispatch(startSaveMyReactions(user.id))
    }
  }, [user, dispatch])
  

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
        dispatch(logout(token));
        navigate('/')
      }
    });
  };

  return (
    <Layout>
      {user.logged && (
        <button onClick={startLogout}>logout</button>
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
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileEdit />} />
        <Route path="/updatecity/:id" element={<UpdateCity />} />
        <Route path="/updateitineraries/:id" element={<UpdateItinerary />} />
        <Route path="/myreactions" element={<Myreactions />} />

        <Route
          path="/mycities"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role?.includes("admin")}
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
              isAllowed={!!user && user.role?.includes("admin")}
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
              isAllowed={!!user && user.role?.includes("admin")}
              reDirect={"/"}
            >
              <NewCity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newitinerary"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role?.includes("admin")}
              reDirect={"/"}
            >
            <NewItinerary />
            </ProtectedRoute>
          }
        />

        <Route
          path="/newhotel"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role?.includes("admin")}
              reDirect={"/"}
            >
              <NewHotelPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/newreaction"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.role?.includes("admin")}
              reDirect={"/"}
            >
              <NewReaction />
            </ProtectedRoute>
          }
        />

        <Route path="/hotelsAdmin" element={<MyHotel />} />
        <Route path="/hotelsAdmin/:id" element={<HotelEdit />} />
        <Route path="/showsUser" element={<MyShows />} />
        <Route path="/showsUser/:id" element={<ShowEdit />} />
        <Route path="/newShow" element={<NewShow />} />
      </Routes>
    </Layout>
  );

}
export default App;
