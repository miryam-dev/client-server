import { createStore, combineReducers, applyMiddleware } from 'redux';
import users from './reducers/users'
import tasks from './reducers/tasks' 
const reducer= combineReducers({users,tasks});


const logAction = (store) => (next) => (action) => {

    console.log(action.type);

    return next(action);
}
const store = createStore(reducer,applyMiddleware(logAction));
window.store=store;
export default store;