import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { getSearchId, getTickets } from '../../actions/get-tickets-actions'
import setNewTicketLimiter from '../../actions/set-new-limiter'
import Ticket from '../ticket/ticket'

import classes from './tickets.module.scss'

export default function Tickets() {
  const dispatch = useDispatch()
  let ticketId = 0
  const mainFilter = useSelector((state) => state.mainFilter)
  const ticketsLimiter = useSelector((state) => state.visibleTickets)
  const searchId = useSelector((state) => state.searchId)
  const showLoader = useSelector((state) => state.showLoader)
  let tickets = useSelector((state) => state.tickets)
  const { all, straight, oneTrans, twoTrans, threeTrans } = useSelector(
    (state) => state.transferFilter
  )

  const showError = !all && !straight && !oneTrans && !twoTrans && !threeTrans

  useEffect(() => {
    dispatch(getSearchId())
  }, [])

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId))
    }
  }, [searchId])

  const straightTickets = tickets.filter(
    ({ segments }) =>
      segments[0].stops.length === 0 && segments[1].stops.length === 0
  )
  const oneTransTickets = tickets.filter(
    ({ segments }) =>
      (segments[0].stops.length === 1 && segments[1].stops.length) === 1
  )
  const twoTransTickets = tickets.filter(
    ({ segments }) =>
      segments[0].stops.length === 2 && segments[1].stops.length === 2
  )
  const threeTransTickets = tickets.filter(
    ({ segments }) =>
      segments[0].stops.length === 3 && segments[1].stops.length === 3
  )

  const visibleTickets = () => {
    let finalList = []

    if (all) return tickets
    if (straight) finalList = [...finalList, ...straightTickets]
    if (oneTrans) finalList = [...finalList, ...oneTransTickets]
    if (twoTrans) finalList = [...finalList, ...twoTransTickets]
    if (threeTrans) finalList = [...finalList, ...threeTransTickets]
    return finalList
  }
  tickets = visibleTickets()

  tickets = tickets.sort((a, b) => {
    const { segments: segmentsA } = a
    const { segments: segmentsB } = b
    const totalTimeA = segmentsA[0].duration + segmentsA[1].duration
    const totalTimeB = segmentsB[0].duration + segmentsB[1].duration

    switch (mainFilter) {
      case 'PRICE':
        return a.price - b.price
      case 'TIME':
        return totalTimeA - totalTimeB

      case 'OPTIMAL':
        return a.price * totalTimeA - b.price * totalTimeB
      default:
        return 0
    }
  })

  tickets = tickets.map((ticket) => {
    ticketId += 1
    if (ticketId > ticketsLimiter) return null
    const { price, carrier, segments } = ticket
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
      {showLoader && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 69,
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 175,
                color: '#2196F3',
              }}
              spin
            />
          }
        />
      )}
      {showError && (
        <div className={classes['error-block']}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      )}
      {tickets}
      <button
        type="button"
        className={classes['show-more']}
        onClick={() => dispatch(setNewTicketLimiter())}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
