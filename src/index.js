import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './container/App/App'
import authReducer from './redux/reducer/authReducer'
import globalReducer from './redux/reducer/globalReducer'
import './index.css'

axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}` || '';
//Reducer 
const rootReducer = combineReducers({ auth: authReducer, global: globalReducer })
//Store
const store = createStore(rootReducer)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
