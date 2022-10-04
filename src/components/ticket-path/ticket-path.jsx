import classes from './ticket-path.module.scss'

export default function TicketPath() {
  return (
    <div className={`${classes.ticket__ways} ${classes.way}`}>
      <div className={classes.way__description}>
        <div className={classes.way__header}>MOW – HKT</div>
        <div className={classes.way__value}>10:45 – 08:00</div>
      </div>
      <div className={`${classes.way__duration} ${classes.duration}`}>
        <div className={classes.duration__header}>В пути</div>
        <div className={classes.duration__value}>21ч 15м</div>
      </div>
      <div className={`${classes.way__transfers} ${classes.transfer}`}>
        <div className={classes.transfer__header}>2 пересадки</div>
        <div className={classes.transfer__value}>HKG, JNB</div>
      </div>
    </div>
  )
}
