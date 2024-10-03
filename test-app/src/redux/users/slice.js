import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './thunk';

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        data: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default fetchSlice.reducer
