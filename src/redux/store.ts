import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import listCustomerReducer from '@/features/customer/listCustomerSlice';
import authReducer from '@/features/auth/authSlice';
import layoutBreakpointSlice from '@/features/layoutBreakpoint/layoutBreakpointSlice';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    layoutBreakPoint: layoutBreakpointSlice,
    auth: authReducer,
    listCutomer: listCustomerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;