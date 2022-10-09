const updateLimiterReducer = (state = 5, action) => {
  switch (action.type) {
    case 'UPDATE_LIMITER':
      return state + 5

    default:
      return state
  }
}
export default updateLimiterReducer
