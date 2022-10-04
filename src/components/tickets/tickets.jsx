import Ticket from '../ticket/ticket'

import './tickets.scss'

export default function Tickets() {
  return (
    <div className="tickets">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button type="button" className="show-more">
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
