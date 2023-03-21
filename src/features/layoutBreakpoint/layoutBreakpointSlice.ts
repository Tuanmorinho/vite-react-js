import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';

export interface IlayoutBreakpointState {
    isMobile: boolean;
}

const initialState: IlayoutBreakpointState = {
    isMobile: false
};
  

export const layoutBreakpointSlice = createSlice({
    name: 'layoutBreakpoint',
    initialState,
    reducers: {
        setIsMobile(state, action: PayloadAction<boolean>) {
            state.isMobile = action.payload;
        },
    }
});

export const { setIsMobile } = layoutBreakpointSlice.actions;

export const selectIsMobile = (state: RootState) => state.layoutBreakPoint.isMobile;

export default layoutBreakpointSlice.reducer;