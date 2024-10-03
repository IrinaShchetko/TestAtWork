import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
    'fetch/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            return response.data.slice(0, 6);
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Ошибка загрузки данных');
        }
    }
);
