import * as types from './types';
// Initial (starting) state

  //   this.state = {
  //     patients: [],
  //     users: [],
  //     fhir: window.fhir,
  //     patient_name: "",
  //     refreshing: false,
  //     refreshP: false,
  //     refreshU: false
  //   };


//   this.state = {
//     loading: false,
//     patient: "Joe NotSMART",
//     smart: this.getSmartClient()

// export const getSmartClient = () => {
//     return (
//         window.FHIR.client({
//             serviceUrl: "https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open",
//             patientId: "smart-1032702",
//             auth: {
//                 type: 'none'
//             }
//         })
//     )
// }

const initialState = {
    patients: [],
    users: [],
    patientName: "Initial Name",
    loading: false,
    currentTime: "Not Loaded"
    // smart: getSmartClient(),

    //     refreshing: false,
    //     refreshP: false,
    //     refreshU: false    
}

// Root Reducer - starts with initialState


const sof = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_NEW_PATIENT:
            return {
                ...state,
                patientName: action.patientName
            }             
        case types.FETCH_NEW_TIME:
            return {
                ...state, 
                currentTime: action.currentTime 
            }
        default:
            return state;
    }
}

export default sof;