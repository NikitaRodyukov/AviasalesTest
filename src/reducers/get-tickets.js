const getTicketsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GOT_TICKETS':
      return action.data

    default:
      return state
  }
}
export default getTicketsReducer
