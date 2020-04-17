import {createStore,combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

const rootReducer = combineReducers({
    form:reduxFormReducer
});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(rootReducer);



    export default store;