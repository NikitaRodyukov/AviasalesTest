import './transfer-filters.scss'

export default function TransferFilters() {
  return (
    <aside className="transfer-filters filter">
      <div className="transfer-filters__header">Количество пересадок</div>
      <label className="filter" htmlFor="checkbox-all">
        <input type="checkbox" name="" id="checkbox-all" />
        Все
        <span className="checkmark" />
      </label>

      <label className="filter" htmlFor="checkbox-none">
        <input type="checkbox" name="" id="checkbox-none" />
        Без пересадок
        <span className="checkmark" />
      </label>

      <label className="filter" htmlFor="checkbox-one">
        <input type="checkbox" name="" id="checkbox-one" />1 пересадка
        <span className="checkmark" />
      </label>

      <label className="filter" htmlFor="checkbox-two">
        <input type="checkbox" name="" id="checkbox-two" />2 пересадки
        <span className="checkmark" />
      </label>

      <label className="filter" htmlFor="checkbox-three">
        <input type="checkbox" name="" id="checkbox-three" />3 пересадки
        <span className="checkmark" />
      </label>
    </aside>
  )
}
