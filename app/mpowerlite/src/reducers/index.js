import {
    combineReducers
} from 'redux';
import currentUser from './currentUser'
import sof from './sof'

const mpowerLiteApp = combineReducers({
    currentUser,
    sof
})

export default mpowerLiteApp;