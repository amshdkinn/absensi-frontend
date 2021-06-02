import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ render: Component, role, store, ...rest }) {
    let allow = store?.auth?.isAuthenticated
    // const allow = true
    return (
        <Route {...rest} render={props =>
        (
            allow
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: "/login",
                    state: { from: props.location }
                }} />
        )}
        />
    )
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

export default connect(mapStateToProps)(PrivateRoute)