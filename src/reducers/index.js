import { combineReducers } from 'redux'

import getTicketsReducer from './get-tickets'
import getSearchIdReducer from './get-id'
import mainFilterReducer from './filter'
import transferFilterReducer from './transfer-filter'

const allReducers = combineReducers({
  mainFilter: mainFilterReducer,
  transferFilter: transferFilterReducer,
  searchId: getSearchIdReducer,
  tickets: getTicketsReducer,
})

export default allReducers
