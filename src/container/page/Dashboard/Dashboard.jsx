import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionType from '../../../redux/reducer/globalActionType'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <br /><br /><br />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: {
        handeChangeUsername: (value) => dispatch({ type: ActionType.CHANGE_USERNAME, username: value })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
