import './ticket-path.scss'

export default function TicketPath() {
  return (
    <div className="ticket__ways way">
      <div className="way__description">
        <div className="way__header">MOW – HKT</div>
        <div className="way__value">10:45 – 08:00</div>
      </div>
      <div className="way__duration duration">
        <div className="duration__header">В пути</div>
        <div className="duration__value">21ч 15м</div>
      </div>
      <div className="way__transfers transfer">
        <div className="transfer__header">2 пересадки</div>
        <div className="transfer__value">HKG, JNB</div>
      </div>
    </div>
  )
}
