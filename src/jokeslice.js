import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchjokes = createAsyncThunk("jokes/jokecategory", async function (category) {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`).then((result) => {
        console.log(result.data.value)
        return (result.data.value)
    })
})

const initialState = {
    joke: "No joke"
}

const jokeslice = createSlice(
    {
        name: "joke",
        initialState,
        reducers: {

        },
        extraReducers: (build) => {
            build.addCase(fetchjokes.pending, function () { console.log("Loading....") }).addCase(fetchjokes.fulfilled, (state, action) => { state.joke = action.payload })
        }

    }
)

export default jokeslice
export { fetchjokes }