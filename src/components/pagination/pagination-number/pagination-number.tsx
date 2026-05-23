import { Link } from "react-router-dom"
import { clsx } from "@/shared/utils"
import s from "./pagination-number.module.css"

export type PaginationNumberPosition = "first" | "last" | "single" | "middle"

type Props = {
  page: string | number
  href: string
  isActive: boolean
  position: PaginationNumberPosition | null
}

export const PaginationNumber = ({ page, href, isActive, position }: Props) => {
  const className = clsx(
    s.number,
    position === "first" ? s.first : undefined,
    position === "last" ? s.last : undefined,
    position === "single" ? s.single : undefined,
    position === "middle" ? s.middle : undefined,
    isActive && s.active
  )

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link to={href} className={className}>
      {page}
    </Link>
  )
}
