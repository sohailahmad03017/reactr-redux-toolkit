const { createSlice } = require("@reduxjs/toolkit");

const loginSlice = createSlice({
    name: "loginReducer",
    initialState: {
        userName: 'Sohail Ahmad',
        email: 'sohail@gmail.com',
        password: '123456'
    },
    reducers: {
        add(state,action){},
        del(state,action){},
        edit(state,action){},
    }
})

export const { add, edit} = loginSlice.actions

export default loginSlice.reducer;