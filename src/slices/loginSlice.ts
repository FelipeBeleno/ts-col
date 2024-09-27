import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    logged: boolean;
    name: string;
}


const savedLoginState = localStorage.getItem('loginState');
const initialState: LoginState = savedLoginState && savedLoginState.length > 0
    ? JSON.parse(savedLoginState)
    : { logged: false, name: '' };

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.clear();
            state = {
                logged: false,
                name: ''
            };

            return state;
        },
        login: (state, action: PayloadAction<LoginState>) => {
            localStorage.setItem('loginState', JSON.stringify(action.payload));
            state = {
                name: action.payload.name,
                logged: action.payload.logged
            };

            return state;
        },
    },
});

export const { logout, login } = loginSlice.actions;
export default loginSlice.reducer;
