import * as types from '../reducers/types';

export const fetchNewPatient = () => ({
    type: types.FETCH_NEW_PATIENT,
    patient_name: "Static Patient"
})

export const fetchNewTime = () => ({
    type: types.FETCH_NEW_TIME,
    currentTime: new Date().toString()
})

export const login = (user) => ({
    type: types.LOGIN,
    user: user
})

export const logout = () => ({
    type: types.LOGOUT,
})