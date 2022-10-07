import { useSelector, useDispatch } from 'react-redux'

import {
  showAll,
  showNoTransfer,
  showOneTransfer,
  showTwoTransfer,
  showThreeTransfer,
} from '../../actions/transfer-filter-actions'

import classes from './transfer-filters.module.scss'

export default function TransferFilters() {
  const { straight, all, oneTrans, twoTrans, threeTrans } = useSelector(
    (state) => state.transferFilter
  )

  const dispatch = useDispatch()

  return (
    <aside className={`${classes['transfer-filters']} ${classes.filter}`}>
      <div className={classes['transfer-filters__header']}>
        Количество пересадок
      </div>
      <label className={classes.filter} htmlFor="checkbox-all">
        <input
          type="checkbox"
          name=""
          id="checkbox-all"
          onChange={() => dispatch(showAll())}
          checked={all}
        />
        Все
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-none">
        <input
          type="checkbox"
          name=""
          id="checkbox-none"
          onChange={() => dispatch(showNoTransfer())}
          checked={straight}
        />
        Без пересадок
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-one">
        <input
          type="checkbox"
          name=""
          id="checkbox-one"
          onChange={() => dispatch(showOneTransfer())}
          checked={oneTrans}
        />
        1 пересадка
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-two">
        <input
          type="checkbox"
          name=""
          id="checkbox-two"
          onChange={() => dispatch(showTwoTransfer())}
          checked={twoTrans}
        />
        2 пересадки
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-three">
        <input
          type="checkbox"
          name=""
          id="checkbox-three"
          onChange={() => dispatch(showThreeTransfer())}
          checked={threeTrans}
        />
        3 пересадки
        <span className={classes.checkmark} />
      </label>
    </aside>
  )
}
