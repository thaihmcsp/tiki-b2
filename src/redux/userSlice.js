const { createSlice } = require("@reduxjs/toolkit");
// const initUser = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : [];
let string = window.localStorage.getItem('tiki-user')
console.log(2,string)
let init 
if(!string) {
    init= {}
}else{
    init = JSON.parse(string);
}

const userSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
        userLogin: function(state, action) {
            window.localStorage.getItem('tiki-user', JSON.stringify(action.payload))
            return action.payload;
        },
        adminChangShopstatus: function(state, action) {
            
        }
    }
})

export const {userLogin} = userSlice.actions;
export const userReducer = userSlice.reducer;