import { useSelector, useDispatch } from 'react-redux'

import {
  filterByPrice,
  filterByDuration,
  filterOptimal,
} from '../../actions/main-filter-actions'

import classes from './btn-filters.module.scss'

export default function BtnFilters() {
  const filter = useSelector((state) => state.mainFilter)
  const dispatch = useDispatch()

  return (
    <div className={`${classes['btn-filters']}`}>
      <button
        type="button"
        className={`${classes.btn} ${
          filter === 'PRICE' && classes['btn--active']
        }`}
        onClick={() => dispatch(filterByPrice())}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`${classes.btn} ${
          filter === 'TIME' && classes['btn--active']
        }`}
        onClick={() => dispatch(filterByDuration())}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={`${classes.btn} ${
          filter === 'OPTIMAL' && classes['btn--active']
        }`}
        onClick={() => dispatch(filterOptimal())}
      >
        Оптимальный
      </button>
    </div>
  )
}
