const mainFilterReducer = (state = null, action) => {
  switch (action.type) {
    case 'PRICE':
      return 'PRICE'

    case 'TIME':
      return 'TIME'

    case 'OPTIMAL':
      return 'OPTIMAL'

    default:
      return state
  }
}

export default mainFilterReducer
