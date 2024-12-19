import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../api/qouteAction.ts";

const quoteSlice = createSlice({
    name: "quote",
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Pending...')
            .addCase(fetchQuote.fulfilled, (_state, action) => action.payload)
            .addCase(fetchQuote.rejected, () => 'Failed to fetch quote data')
    }
})

export default quoteSlice.reducer;