import { combineReducers } from 'redux';

import studentDataReducer from './studentDataReducer';

const rootReducer = combineReducers({
    students: studentDataReducer,
})

export default rootReducer;