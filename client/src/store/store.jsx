import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authReducer';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;