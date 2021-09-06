import { takeEvery } from 'redux-saga/effects';
import { sagaActions } from './typeSagas';
import { increaseCount } from './count';

export default function* rootSaga() {
  yield takeEvery(sagaActions.INCREASE, increaseCount);
}
