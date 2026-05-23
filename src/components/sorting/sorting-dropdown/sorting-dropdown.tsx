import { ArrowUpDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/button/button"
import { SortingPanel } from "../sorting-panel/sorting-panel"
import s from "./sorting-dropdown.module.css"

export const SortingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <div ref={dropdownRef} className={s.dropdown}>
      <Button className={s.trigger} onClick={() => setIsOpen((prev) => !prev)}>
        <ArrowUpDown />
      </Button>

      {isOpen && (
        <SortingPanel onSort={() => setIsOpen(false)} className={s.content} />
      )}
    </div>
  )
}
