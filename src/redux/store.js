import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";

import hotelsReducer from "./reducers/hotelReducer"
import { itinerariesReducer } from "./reducers/itinerariesReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer,
        itineraries: itinerariesReducer,
        auth: userReducer
    }
})

export default store;