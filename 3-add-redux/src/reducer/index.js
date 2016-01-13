import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import counterReducer from 'component/counter/reducer/counter-reducer';

export default combineReducers({
  counterReducer,

  routing: routeReducer
});
