import { SortingDropdown } from "./sorting-dropdown/sorting-dropdown"
import { SortingPanel } from "./sorting-panel/sorting-panel"
import s from "./sorting.module.css"

export const Sorting = () => {
  return (
    <>
      <div className={s.desktop}>
        <SortingPanel />
      </div>

      <div className={s.mobile}>
        <SortingDropdown />
      </div>
    </>
  )
}
