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

export const login = (user) => ({
    type: types.LOGIN,
    user: user
})

export const logout = () => ({
    type: types.LOGOUT,
})

export const toggleNav = () => ({
    type: types.TOGGLE_NAV,
})