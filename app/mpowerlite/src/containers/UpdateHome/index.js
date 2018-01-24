import {
    connect
} from 'react-redux'
import {
    fetchNewPatient,
    fetchNewTime
} from '../../actions'

import Home from '../../components/Home'

const mapStateToProps = state => ({
    patient_name: state.sof.patient_name,
    loading: state.sof.loading,
    currentTime: state.sof.currentTime
})

const mapDispatchToProps = dispatch => {
    return {
        updateTime: () => dispatch(fetchNewTime()),
        updatePatient: () => dispatch(fetchNewPatient())
    }
}

const UpdateHome = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

export default UpdateHome;
