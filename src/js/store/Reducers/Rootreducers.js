import { combineReducers } from 'redux';
import authReducer from './authReducer';
import componentReducer from './componentReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    UI: componentReducer,
    data: dataReducer
})

export default rootReducer