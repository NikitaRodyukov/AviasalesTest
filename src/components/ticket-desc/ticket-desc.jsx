import classes from './ticket-desc.module.scss'

export default function TicketDesc({ segments }) {
  const { origin, destination, date, stops, duration } = segments
  const formatTime = (time) => time.toString().padStart(2, '0')

  const newDate = new Date(date)
  let hours = Math.floor(duration / 60)
  let mins = duration - hours * 60

  const fligthStops = stops.length || 0
  let hoursDate = newDate.getHours()
  let minsDate = newDate.getMinutes()

  let arrivalHours = hoursDate + hours

  if (arrivalHours > 23) {
    arrivalHours -= Math.floor(arrivalHours / 24) * 24
  }

  let arrivalMins = minsDate + mins

  if (arrivalMins > 59) {
    arrivalHours += Math.floor(arrivalMins / 60)
    arrivalMins -= Math.floor(arrivalMins / 60) * 60
  }

  arrivalHours = formatTime(arrivalHours)
  arrivalMins = formatTime(arrivalMins)
  hoursDate = formatTime(hoursDate)
  minsDate = formatTime(minsDate)
  hours = formatTime(hours)
  mins = formatTime(mins)

  return (
    <div className={`${classes.desc}`}>
      <div className={`${classes.desc__column}`}>
        <div
          className={classes.column__header}
        >{`${origin} – ${destination}`}</div>
        <div
          className={classes.column__value}
        >{`${hoursDate}:${minsDate} - ${arrivalHours}:${arrivalMins}`}</div>
      </div>
      <div className={`${classes.desc__column}`}>
        <div className={classes.column__header}>В пути</div>
        <div className={classes.column__value}>{`${hours}ч ${mins}м`}</div>
      </div>
      <div className={`${classes.desc__column}`}>
        <div
          className={classes.column__header}
        >{`${fligthStops} Пересадки`}</div>
        <div className={classes.column__value}>{stops.join(',') || '/'}</div>
      </div>
    </div>
  )
}
