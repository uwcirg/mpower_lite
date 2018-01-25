import React from 'react'
import {
    connect
} from 'react-redux'

import NavBar from '../../components/NavBar';


import {
    toggleNav
} from '../../actions'

import Jumbo from '../../components/Jumbo'

const mapStateToProps = state => ({ collapsed: state.nav.collapsed,});

const mapDispatchToProps = (dispatch) => {
    console.log("Patching:");

    return {
        onToggle: () => dispatch(toggleNav())
    }
}

const CollapseNav = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar);

export default CollapseNav;