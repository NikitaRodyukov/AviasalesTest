import { useEffect, useState } from 'react'

import TicketDesc from '../ticket-desc/ticket-desc'

import classes from './ticket.module.scss'

export default function Ticket({ price, carrier, segments }) {
  const [img, setImg] = useState(null)
  const [isImgLoading, setStatusLoading] = useState(true)
  const [first, second] = segments

  useEffect(() => {
    const getImage = async () => {
      const response = await fetch(`https://pics.avs.io/99/36/${carrier}.png`)
      setStatusLoading(false)
      setImg(response.url)
    }
    getImage()
  }, [])

  const haveImg = img && !isImgLoading

  return (
    haveImg && (
      <div className={`${classes.ticket__item} ${classes.item}`}>
        <div className={`${classes.item__header} ${classes.header}`}>
          <div className={classes.header__price}>{`${price} Р`}</div>
          <img
            src={img}
            alt={carrier}
            className={classes['item__header__company-logo']}
          />
        </div>
        <TicketDesc segments={first} />
        <TicketDesc segments={second} />
      </div>
    )
  )
}
