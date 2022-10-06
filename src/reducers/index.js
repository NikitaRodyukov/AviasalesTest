import { combineReducers } from 'redux'

import filterReducer from './filter'
import transferFilterReducer from './transfer-filter'

const allReducers = combineReducers({
  currentFilter: filterReducer,
  transferFilter: transferFilterReducer,
})

export default allReducers
