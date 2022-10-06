import TicketPath from '../ticket-path/ticket-path'
import Logo from '../logo/S7 Logo.png'

import classes from './ticket.module.scss'

export default function Ticket() {
  return (
    <div className={`${classes.ticket__item} ${classes.item}`}>
      <div className={classes.item__header}>
        <div className={classes.item__header__price}>13 400 Р</div>
        <img
          src={Logo}
          alt=""
          className={classes['item__header__company-logo']}
        />
      </div>
      <TicketPath />
      <TicketPath />
    </div>
  )
}
