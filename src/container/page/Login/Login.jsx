import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'
import BlockUi from 'react-block-ui'
// import 'react-block-ui/style.css'
import './BlockUI.css'
import { API_URL } from '../../../config/config'
import { Navbar, Header, Footer } from '../../../component/Auth/index'
import LoginForm from './LoginForm/LoginForm'
import ActionType from '../../../redux/reducer/globalActionType'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirectToDashboard: false,
            toggleBlocking: false,
            formError: null
        }
    }

    componentDidMount() {
        if (this.props.store?.auth?.isAuthenticated) {
            return this.props.history.push('/dashboard')
        }

        const body = document.querySelector('body')
        body.classList.add('bg-default')

        // this.setState({
        //     page: this.props.match.url.match(/admin/g) ? 'adm' : 'ts' // => TeacherStudent
        // })
    }

    componentWillUnmount() {
        const body = document.querySelector('body')
        body.classList.remove('bg-default')
    }

    setLoginState = ({ username, password }) => {
        this.setState(prev => {
            return {
                ...prev,
                username: username,
                password: password
            }
        })
    }

    MyBlockUi = (props) => {
        const { block, children: Component } = props
        if (block) {
            return (
                <div className="block-ui-container">
                    <div className="block-ui-overlay" />
                    <div className="block-ui-message-container">
                        <div className="block-ui-message">
                            <div className="loading-indicator">
                                <svg id="indicator" viewBox="0 0 100 100">
                                    <circle id="circle" cx="50" cy="50" r="45" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }

        return (
            <Component />
        )
    }

    loginSubmit = (e) => {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        this.setState(prevState => ({ ...prevState, toggleBlocking: true }))
        axios.post(`${API_URL}/api/login`, {
            username: this.state.username,
            password: this.state.password
        }, {
            header: {
                // "Content-Type": "application/json",
                // setTimeout: 10000,
                'X-Requested-With': 'XMLHttpRequest',
            }
        }).then(({ data }) => {
            if (data.code === 200) {
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', JSON.stringify(data.data.user))
                swal.fire({
                    title: "Login berhasil",
                    text: "Anda akan dialihkan ke Dashboard",
                    icon: "success",
                }).then(will => {
                    if (will) {
                        this.props.dispatch.updateUserdata({
                            isAuthenticated: true,
                            token: data.data.token,
                            user: data.data.user
                        })
                        return window.location = '/dashboard'
                    }
                })
            }
        }).catch(({ response: { data: { code, lenght, message, status } } }) => {
            if (code === 403 && lenght === 0 && !status) {
                this.setState(prev => ({
                    ...prev,
                    toggleBlocking: false,
                    formError: message
                }))
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="main-content">
                    <Header />
                    <div className="container mt--8 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-secondary border-0 mb-0">
                                    {/* <this.MyBlockUi block={false}> */}
                                    <BlockUi tag="div" blocking={this.state.toggleBlocking}>
                                        <div className="card-body px-lg-5 py-lg-5">
                                            <LoginForm setLoginState={this.setLoginState} loginSubmit={this.loginSubmit} />
                                        </div>
                                    </BlockUi>
                                    {/* </this.MyBlockUi> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: {
            updateUserdata: (props) => {
                dispatch({
                    type: ActionType.UPDATE_USERDATA,
                    ...props
                })
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)