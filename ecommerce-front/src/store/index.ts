import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { createStore } from 'redux';
import createRootReducer from './reducers';
export const history = createHashHistory()
const sotre = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history))
)
export default sotre