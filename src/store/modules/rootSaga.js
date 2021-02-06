import { all } from 'redux-saga/effects';
import exampleReducer from './example/sagas';

export default function* rooSaga() {
  return yield all([exampleReducer]);
}
