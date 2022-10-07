import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getSearchId, getTickets } from '../../actions/get-tickets-actions'
import Ticket from '../ticket/ticket'

import classes from './tickets.module.scss'

export default function Tickets() {
  let ticketId = 1

  const searchId = useSelector((state) => state.searchId)
  const ticketsData = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId))
    }
  }, [searchId])

  const tickets =
    ticketsData &&
    ticketsData.map((ticket) => {
      const { price, carrier, segments } = ticket
      ticketId += 1
      return (
        <Ticket
          key={ticketId}
          price={price}
          carrier={carrier}
          segments={segments}
        />
      )
    })

  return (
    <div className="tickets">
      {tickets}
      <button type="button" className={classes['show-more']}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
