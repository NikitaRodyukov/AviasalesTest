import { useSelector, useDispatch } from 'react-redux'

import { showAll, showNoTransfer, showOneTransfer, showTwoTransfer, showThreeTransfer } from '../../actions'

import classes from './transfer-filters.module.scss'

export default function TransferFilters() {
  const { none, all, oneTrans, twoTrans, threeTrans } = useSelector((state) => state.numberOfTransfers)
  const toggleAll = none && oneTrans && twoTrans && threeTrans
  const dispatch = useDispatch()

  return (
    <aside className={`${classes['transfer-filters']} ${classes.filter}`}>
      <div className={classes['transfer-filters__header']}>Количество пересадок</div>
      <label className={classes.filter} htmlFor="checkbox-all">
        <input
          type="checkbox"
          name=""
          id="checkbox-all"
          onClick={() => dispatch(showAll())}
          checked={all || toggleAll}
        />
        Все
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-none">
        <input
          type="checkbox"
          name=""
          id="checkbox-none"
          onClick={() => dispatch(showNoTransfer())}
          checked={none || all}
        />
        Без пересадок
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-one">
        <input
          type="checkbox"
          name=""
          id="checkbox-one"
          onClick={() => dispatch(showOneTransfer())}
          checked={oneTrans || all}
        />
        1 пересадка
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-two">
        <input
          type="checkbox"
          name=""
          id="checkbox-two"
          onClick={() => dispatch(showTwoTransfer())}
          checked={twoTrans || all}
        />
        2 пересадки
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-three">
        <input
          type="checkbox"
          name=""
          id="checkbox-three"
          onClick={() => dispatch(showThreeTransfer())}
          checked={threeTrans || all}
        />
        3 пересадки
        <span className={classes.checkmark} />
      </label>
    </aside>
  )
}
