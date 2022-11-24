import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";

import hotelsReducer from "./reducers/hotelReducer"
import { itinerariesReducer } from "./reducers/itinerariesReducer";

const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer,
        itineraries: itinerariesReducer
    }
})

export default store;