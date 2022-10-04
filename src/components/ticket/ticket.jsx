import TicketPath from '../ticket-path/ticket-path'
import Logo from '../logo/S7 Logo.png'
import './ticket.scss'

export default function Ticket() {
  return (
    <div className="ticket__item item">
      <div className="item__header">
        <div className="item__header__price">13 400 Р</div>
        <img src={Logo} alt="" className="item__header__company-logo" />
      </div>
      <TicketPath />
      <TicketPath />
    </div>
  )
}
