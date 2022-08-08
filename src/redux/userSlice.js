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
console.log(13, init);
const userSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
<<<<<<<<< Temporary merge branch 1
        userLogin: function(state, action) {
            window.localStorage.getItem('tiki-user', JSON.stringify(action.payload))
=========
        userLogin: function( state, action) {
            window.localStorage.setItem('tiki-user', JSON.stringify(action.payload));
>>>>>>>>> Temporary merge branch 2
            return action.payload;
        },
        updateInfo: function( state, action) {
            window.localStorage.setItem('tiki-user', JSON.stringify(action.payload));
            return action.payload
        }
    }
})

export const {userLogin, updateInfo} = userSlice.actions;
export const userReducer = userSlice.reducer;