import { combineReducers } from 'redux';
import loading from './loading';
import sections from './sections';
import posts from './posts';
import reason from './reason';
import user from './user';

const rootReducer = combineReducers({
  loading,
  user,
  sections,
  posts,
  reason
});

export default rootReducer;
