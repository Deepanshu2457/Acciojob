import {configureStore} from '@reduxjs/toolkit'
import feedbackReducer from "./features/feature"
const feedbackStore= configureStore({
    reducer:{
       feedback:feedbackReducer
    }
})

export default feedbackStore