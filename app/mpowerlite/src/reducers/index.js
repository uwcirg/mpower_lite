import {
    combineReducers
} from 'redux';
import { reducer as formReducer } from 'redux-form'

import currentUser from './currentUser'
import sof from './sof'
import nav from './nav'


const mpowerLiteApp = combineReducers({
    currentUser,
    sof,
    nav,
    form: formReducer
}) 

export default mpowerLiteApp;