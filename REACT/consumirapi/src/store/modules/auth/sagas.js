/* eslint-disable */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';
import axios from 'axios';
import history from '../../../services/history';
import { get } from 'lodash';

function* loginRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(axios.post, 'http://localhost:3001/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch(e) {
    toast.error('Usuario ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}


function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token');
  if(!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const {id, nome, email, password} = payload;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  ]);
