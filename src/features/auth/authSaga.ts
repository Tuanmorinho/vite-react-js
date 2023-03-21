import { ILoginPayload } from '../../models/auth/auth';
import { fork, take } from "redux-saga/effects";
import { authAction } from "./authSlice";
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin(payload: ILoginPayload) {}

function* handleLogout() {}

function* watchLoginFlow() {
    const actionLogin: PayloadAction<ILoginPayload> = yield take(authAction.login.type);
    yield fork(handleLogin, actionLogin.payload);
}

export default function* authSaga() {
    yield fork(watchLoginFlow);

}