const getSearchIdReducer = (state = null, action) => {
  switch (action.type) {
    case 'GOT_SEARCH_ID':
      return action.data

    default:
      return state
  }
}
export default getSearchIdReducer
