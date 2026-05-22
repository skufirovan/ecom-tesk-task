import { useLocation, useSearchParams } from "react-router-dom"
import { ITEMS_PER_PAGE } from "@/shared/constants"
import { generatePagination } from "@/shared/utils"
import {
  PaginationNumber,
  type PaginationNumberPosition,
} from "./pagination-number"
import s from "./pagination.module.css"

type Props = {
  total: number
}

export const Pagination = ({ total }: Props) => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  if (totalPages <= 1) return

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${location.pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <div className={s.pagination}>
      {allPages.map((page, i) => {
        let position: PaginationNumberPosition | null = null

        if (i === 0) position = "first"
        if (i === allPages.length - 1) position = "last"
        if (allPages.length === 1) position = "single"
        if (page === "...") position = "middle"

        return (
          <PaginationNumber
            key={`${page}-${isNaN}`}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        )
      })}
    </div>
  )
}
