import {combineReducers} from 'redux';
import generalReducer from './generalReducer';


const rootReducer = combineReducers({
  app: generalReducer
});

export default rootReducer;