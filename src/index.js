/* eslint-disable no-underscore-dangle */
import { createRoot } from 'react-dom/client'
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import allReducers from './reducers'
import App from './components/app/app'

import './index.scss'

const store = createStore(allReducers, compose(applyMiddleware(thunk)))

const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
