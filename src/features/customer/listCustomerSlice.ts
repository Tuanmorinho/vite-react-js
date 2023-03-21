import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { ICustomer } from '@/models/features/customer';

export interface ICustomerState {
    data?: ICustomer[];
    loading: boolean;
    message: string;
}

const initialState: ICustomerState = {
    data: undefined,
    loading: false,
    message: ''
};
  

export const listCustomerSlice = createSlice({
    name: 'customer/list',
    initialState,
    reducers: {
        getCustomer(state) {
            state.loading = true;
        },

        getCustomerSuccess(state, action: PayloadAction<ICustomer[]>) {
            state.loading = false;
            state.data = action.payload;
        },

        getCustomerFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.message = action.payload;
        },
    }
});

export const { getCustomer, getCustomerSuccess, getCustomerFailed } = listCustomerSlice.actions;

export const selectListCustomer = (state: RootState) => state.listCutomer;

export default listCustomerSlice.reducer;