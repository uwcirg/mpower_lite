import {
    connect
} from 'react-redux'
import {
    fetchNewPatient,
    fetchNewTime
} from '../../actions'

import Jumbo from '../../components/Jumbo'

const mapStateToProps = state => ({
    patientName: state.sof.patientName,
    loading: state.sof.loading,
    currentTime: state.sof.currentTime
})

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("AGH:");
    console.log(ownProps);

    return {
        updateTime: () => {
            dispatch(fetchNewTime(ownProps.timezone))
        },
        updatePatient: () => {
            dispatch(fetchNewPatient(ownProps.patientId))
        }
    }
}

const UpdateJumbo = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Jumbo);

export default UpdateJumbo;
