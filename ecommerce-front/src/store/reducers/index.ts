import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import testReducer from './test.reducer';
export interface AppState {
  router: RouterState
}
const createRootReducer = (history: History) => combineReducers({
  test: testReducer,
  router: connectRouter(history)
})
export default createRootReducer