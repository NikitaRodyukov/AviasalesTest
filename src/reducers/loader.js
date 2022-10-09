const loaderStatusReducer = (state = false, action) => {
  switch (action.type) {
    case 'DATA_LOAD_TRUE':
      return true

    case 'DATA_LOAD_FINISHED':
      return false

    default:
      return state
  }
}
export default loaderStatusReducer
