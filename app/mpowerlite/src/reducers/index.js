import {
    combineReducers
} from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import sof from './sof'
import nav from './nav'


const mpowerLiteApp = combineReducers({
    auth,
    sof,
    nav,
    form: formReducer
}) 

export default mpowerLiteApp;