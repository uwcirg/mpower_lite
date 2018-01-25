import {
    combineReducers
} from 'redux';
import { reducer as formReducer } from 'redux-form'

import currentUser from './currentUser'
import sof from './sof'


const mpowerLiteApp = combineReducers({
    currentUser,
    sof,
    form: formReducer
}) 

export default mpowerLiteApp;