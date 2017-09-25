import { combineReducers } from 'redux';
import PostsReducer from './reducer_post';

const rootReducer = combineReducers({
	post: PostsReducer
});

export default rootReducer;
