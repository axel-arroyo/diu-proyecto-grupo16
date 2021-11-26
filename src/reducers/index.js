import { combineReducers } from 'redux';
import auth from './auth';
import navigation from './navigation';
import alerts from './alerts';
import register from './register';
import data from './data';

export default combineReducers({
  alerts,
  auth,
  navigation,
  register,
  data,
});
