import Ticket from '../ticket/ticket'

import classes from './tickets.module.scss'

export default function Tickets() {
  return (
    <div className="tickets">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button type="button" className={classes['show-more']}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}
