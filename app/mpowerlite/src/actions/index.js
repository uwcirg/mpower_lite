import * as types from '../reducers/types';

const timehost = 'https://andthetimeis.com';
const sofhost = 'https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open';

export const fetchNewPatient = (id) => ({
    type: types.FETCH_NEW_PATIENT,
    meta: {
        type: 'sof',
        target: 'patientName',
        host: sofhost,
        id: id
    }
})

export const fetchNewTime = (timezone, str) => ({
    type: types.FETCH_NEW_TIME,
    meta: {
        type: 'api',
        target: 'currentTime',
        url: timehost + '/' + timezone + '/' + str + '.json'
    }
})

export const tryLogin = ({
    username,
    password
}) => {
    console.log("ADMIN!!")
    console.log(username)
    console.log(password)
    
    if (username === 'admin@admin.com' && password === 'secret') {
        return {
            type: types.LOGIN_SUCCESS,
            payload: {
                username,
                password
            }
        }
    } else {
        return {
            type: types.LOGIN_FAILURE,
            payload: 'Invalid username or password'
        }
    }
}

export const tryLogout = () => ({
    type: types.LOGOUT
})

export const toggleNav = () => ({
    type: types.TOGGLE_NAV,
})