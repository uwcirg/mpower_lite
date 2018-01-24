import {
    connect
} from 'react-redux'
import {
    fetchNewPatient,
    fetchNewTime
} from '../../actions'

import Home from '../../components/Home'

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
            dispatch(fetchNewTime(ownProps.match.params.timezone))
        },
        updatePatient: () => {
            dispatch(fetchNewPatient(ownProps.match.params.patientId))
        }
    }
}

const UpdateHome = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default UpdateHome;
