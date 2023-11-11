/* eslint-disable */
import { all } from 'redux-saga/effects';

import auth from '../../store/modules/auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}
