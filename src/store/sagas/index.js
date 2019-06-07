import { all, takeLatest } from 'redux-saga/effects';

import { PodCastTypes } from '~/store/ducks/podcasts';
import { load } from './podcasts';

export default function* rootSaga() {
  return yield all([takeLatest(PodCastTypes.LOAD_REQUEST, load)]);
}
