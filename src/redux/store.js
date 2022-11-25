import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";

import hotelsReducer from "./reducers/hotelReducer"
import { itinerariesReducer } from "./reducers/itinerariesReducer";
import showsReducer from "./reducers/showReducers";

const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer,
        itineraries: itinerariesReducer,
        shows: showsReducer
    }
})

export default store;