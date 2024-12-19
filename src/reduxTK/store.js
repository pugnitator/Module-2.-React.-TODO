import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './taskSlice'

const rootReducer = combineReducers({
    task: taskReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})