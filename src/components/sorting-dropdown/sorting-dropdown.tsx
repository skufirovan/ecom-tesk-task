import { ArrowUpDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { clsx } from "@/shared/utils"
import { Button } from "../button/button"
import s from "./sorting-dropdown.module.css"

export const SortingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentOrder = searchParams.get("order")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleSort = (order: "asc" | "desc") => {
    setSearchParams((params) => {
      params.set("sort", "price")
      params.set("order", order)
      params.set("page", "1")

      return params
    })

    setIsOpen(false)
  }

  const handleResetSorting = () => {
    setSearchParams((params) => {
      params.delete("sort")
      params.delete("order")

      return params
    })
  }

  return (
    <div ref={dropdownRef} className={s.dropdown}>
      <Button className={s.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        <ArrowUpDown />
      </Button>

      {isOpen && (
        <div className={s.content}>
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
      )}
    </div>
  )
}
