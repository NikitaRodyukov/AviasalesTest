import classes from './transfer-filters.module.scss'

export default function TransferFilters() {
  return (
    <aside className={`${classes['transfer-filters']} ${classes.filter}`}>
      <div className={classes['transfer-filters__header']}>Количество пересадок</div>
      <label className={classes.filter} htmlFor="checkbox-all">
        <input type="checkbox" name="" id="checkbox-all" />
        Все
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-none">
        <input type="checkbox" name="" id="checkbox-none" />
        Без пересадок
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-one">
        <input type="checkbox" name="" id="checkbox-one" />1 пересадка
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-two">
        <input type="checkbox" name="" id="checkbox-two" />2 пересадки
        <span className={classes.checkmark} />
      </label>

      <label className={classes.filter} htmlFor="checkbox-three">
        <input type="checkbox" name="" id="checkbox-three" />3 пересадки
        <span className={classes.checkmark} />
      </label>
    </aside>
  )
}
