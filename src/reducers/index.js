import { combineReducers } from 'redux'

import getTicketsReducer from './get-tickets'
import getSearchIdReducer from './get-id'
import mainFilterReducer from './filter'
import transferFilterReducer from './transfer-filter'
import updateLimiterReducer from './update-limiter'
import loaderStatusReducer from './loader'

const allReducers = combineReducers({
  mainFilter: mainFilterReducer,
  transferFilter: transferFilterReducer,
  searchId: getSearchIdReducer,
  tickets: getTicketsReducer,
  visibleTickets: updateLimiterReducer,
  showLoader: loaderStatusReducer,
})

export default allReducers
