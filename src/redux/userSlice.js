const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        userLogin: function(action) {
            return action.payload;
        }
    }
})

export const {userLogin} = userSlice.actions;
export const userReducer = userSlice.reducer;