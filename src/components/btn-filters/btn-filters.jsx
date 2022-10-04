import classes from './btn-filters.module.scss'

export default function BtnFilters() {
  return (
    <div className={`${classes.btn} ${classes['btn-filters']}`}>
      <div className={`${classes.btn} ${classes['btn--active']}`}>Самый дешевый</div>
      <div className={classes.btn}>Самый быстрый</div>
      <div className={classes.btn}>Оптимальный</div>
    </div>
  )
}
