import { configureStore } from "@reduxjs/toolkit"
import { citiesReducer } from "./reducers/citiesReducer";

import hotelsReducer from "./reducers/hotelReducer"

const store = configureStore({
    reducer: {
        hotels: hotelsReducer,
        cities: citiesReducer
    }
})

export default store;