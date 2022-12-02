import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";
import commentReducer from "./reducers/commentReducer";

import hotelsReducer from "./reducers/hotelReducer"
import { itinerariesReducer } from "./reducers/itinerariesReducer";

/* import { userReducer } from "./reducers/userReducer"; */

import showsReducer from "./reducers/showReducers";
import userReducer from "./reducers/userReducer";


const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer,
        itineraries: itinerariesReducer,

        auth: userReducer,
        shows: showsReducer,
        users: userReducer,
        comments: commentReducer

    }
})

export default store;