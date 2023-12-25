import { createSlice } from '@reduxjs/toolkit'
// import { addUser } from '_utils_slice__WEBPACK_IMPORTED_MODULE_6__';


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducer: {
        addUser: (action, state) => {
            return action.payload;
        },
        removeUser: (action, state) => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;