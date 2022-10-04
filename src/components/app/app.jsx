import BtnFilters from '../btn-filters/btn-filters'
import Tickets from '../tickets/tickets'
import TransferFilters from '../transfer-filters/transfer-filters'
import Logo from '../logo/Logo.svg'

import classes from './app.module.scss'

export default function App() {
  return (
    <section className={classes.app}>
      <img src={Logo} alt="" className="logo" />
      <article className={classes.main}>
        <TransferFilters />
        <div className={classes['main-content']}>
          <BtnFilters />
          <Tickets />
        </div>
      </article>
    </section>
  )
}
