import { configureStore } from '@reduxjs/toolkit';
import mainSlice from '../modules/mainSlice';

const store = configureStore({
    reducer : mainSlice
});


export default store