// import {putQuote} from "../quote/quoteSlice.ts";
// import {AppDispatch} from "../../app/store.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
    'fetch/quote',
    async() => {
        const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
        const data = await response.json();
        return data.sentence;
    }
)

// export const fetchQuote = () => {
//     return (dispatch: AppDispatch) => {
//         dispatch(putQuote('Pending...'));
//         fetch('https://api.gameofthronesquotes.xyz/v1/random')
//             .then(response => response.json())
//             .then(data => dispatch(putQuote(data.sentence)))
//             .catch(() => dispatch(putQuote('Failed to fetch quote data')));
//     }
// }