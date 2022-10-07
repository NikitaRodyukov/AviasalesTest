export const getSearchId = () => async (dispatch) => {
  const response = await fetch('https://front-test.dev.aviasales.ru/search')
  const data = await response.json()

  dispatch({
    type: 'GOT_SEARCH_ID',
    data: data.searchId,
  })
}

export const getTickets = (id) => async (dispatch) => {
  const response = await fetch(
    `https://front-test.dev.aviasales.ru/tickets?searchId=${id}`
  )
  const tickets = await response.json()

  dispatch({
    type: 'GOT_TICKETS',
    data: tickets.tickets,
  })
}
