import { useSearchParams } from "react-router-dom"
import { Button } from "@/components/button/button"
import { clsx } from "@/shared/utils"
import s from "./sorting-panel.module.css"

type Props = {
  onSort?: () => void
  className?: string
}

export const SortingPanel = ({ onSort, className }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentOrder = searchParams.get("order")

  const handleSort = (order: "asc" | "desc") => {
    setSearchParams((params) => {
      params.set("sort", "price")
      params.set("order", order)
      params.set("page", "1")

      return params
    })

    onSort?.()
  }

  const handleResetSorting = () => {
    setSearchParams((params) => {
      params.delete("sort")
      params.delete("order")

      return params
    })

    onSort?.()
  }

  return (
    <div className={clsx(s.content, className)}>
      <p>Сортировать по:</p>
      <Button
        className={clsx(s.option, currentOrder === "asc" && s.active)}
        variant={currentOrder === "asc" ? "primary" : "secondary"}
        size="sm"
        disabled={currentOrder === "asc"}
        onClick={() => handleSort("asc")}
      >
        Сначала дешевые
      </Button>
      <Button
        className={clsx(s.option, currentOrder === "desc" && s.active)}
        variant={currentOrder === "desc" ? "primary" : "secondary"}
        size="sm"
        disabled={currentOrder === "desc"}
        onClick={() => handleSort("desc")}
      >
        Сначала дорогие
      </Button>
      <Button
        className={clsx(s.option, s.reset)}
        variant="ghost"
        size="sm"
        onClick={handleResetSorting}
      >
        Сбросить
      </Button>
    </div>
  )
}
