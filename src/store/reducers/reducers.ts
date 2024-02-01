import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

const reducers = createSlice({
    name: "reducers",
    initialState,
    reducers: {
        userUpdate: (state, actions) => {
            state.user = actions.payload;
            sessionStorage.setItem("user", JSON.stringify(actions.payload));
        },
        sessionStorageUpdate: (state) => {
            const user = sessionStorage.getItem("user");
            if (user) state.user = JSON.parse(user)
        },
    }
})

export const { userUpdate, sessionStorageUpdate } = reducers.actions;
export default reducers;