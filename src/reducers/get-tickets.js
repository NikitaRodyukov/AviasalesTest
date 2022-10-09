/* eslint-disable no-case-declarations */
const getTicketsReducer = (state = [], action) => {
  const { type, data } = action

  switch (type) {
    case 'SERVER_ERROR':
      return state

    case 'DATA_LOAD_PART':
      return [...state, ...data]

    case 'DATA_LOAD_FINISHED':
      return [...state, ...data]

    default:
      return state
  }
}
export default getTicketsReducer
