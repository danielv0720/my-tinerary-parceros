import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";
import commentReducer from "./reducers/commentReducer";

import hotelsReducer from "./reducers/hotelReducer"
import { itinerariesReducer } from "./reducers/itinerariesReducer";
import reactionReducer from "./reducers/reactionReducer";

import showsReducer from "./reducers/showReducers";
import userReducer from "./reducers/userReducer";


const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer,
        itineraries: itinerariesReducer,
        shows: showsReducer,
        users: userReducer,

        reactions: reactionReducer

        comments: commentReducer


    }
})

export default store;