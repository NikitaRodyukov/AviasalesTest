export const getSearchId = () => async (dispatch) => {
  const response = await fetch('https://front-test.dev.aviasales.ru/search')
  const data = await response.json()

  dispatch({
    type: 'GOT_SEARCH_ID',
    data: data.searchId,
  })
}

export const getTickets = (id) => async (dispatch) => {
  dispatch({
    type: 'DATA_LOAD_TRUE',
  })

  fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
    .then((response) => {
      if (!response.ok) {
        dispatch(getTickets(id))
      }
      return response.json()
    })
    .then((data) => {
      dispatch({
        type: 'DATA_LOAD_PART',
        data: data.tickets,
      })

      if (!data.stop) {
        dispatch(getTickets(id))
      } else {
        dispatch({
          type: 'DATA_LOAD_FINISHED',
          data: data.tickets,
        })
      }
    })
}

export const loadingData = () => ({ type: 'DATA_LOAD_TRUE' })

export const haveAllData = () => ({ type: 'DATA_LOAD_FINISHED' })

export const errorWhileLoadingData = () => ({ type: 'DATA_LOAD_ERROR' })
