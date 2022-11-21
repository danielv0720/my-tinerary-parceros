import { configureStore } from "@reduxjs/toolkit"

import hotelsReducer from "./reducers/hotelReducer"

const store = configureStore({
    reducer: {
        hotels: hotelsReducer
    }
})

export default store