import BtnFilters from '../btn-filters/btn-filters'
import Tickets from '../tickets/tickets'
import TransferFilters from '../transfer-filters/transfer-filters'
import Logo from '../logo/Logo.svg'

import './app.scss'

export default function App() {
  return (
    <section className="app">
      <img src={Logo} alt="" className="logo" />
      <article className="main">
        <TransferFilters />
        <div className="main-content">
          <BtnFilters />
          <Tickets />
        </div>
      </article>
    </section>
  )
}
