import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'
import { CALL_API } from '../actions/actionTypes';
import { baseUrl } from '../constants/config';

interface IApiAction {
  type: string;
  method: string;
  endPoint: string;
  types: string[];
};

export function* apiSaga(action: IApiAction) {
  const [request, success, failure] = action.types;
  const requestUrl = `${baseUrl}/${action.endPoint}`;

  yield put({ type: request });

  try {
    const response = yield (axios as any)[action.method](requestUrl);
    if (response.status < 200 || response.status > 400) {
      throw new Error('Failed to fetch response from server');
    }
  
    yield put({ type: success, data: response.data });
  } catch(error) {
    yield put({ type: failure, error });
  }
}

export default function* () {
  yield takeEvery(CALL_API, apiSaga);
}