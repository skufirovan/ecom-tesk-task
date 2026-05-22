import type { GetProductsOptions } from "@/api/products-api"
import { ITEMS_PER_PAGE } from "./constants"

export function clsx(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ")
}

export function parseSearchOptions(params: URLSearchParams) {
  let page = Number(params.get("page"))

  if (Number.isNaN(page)) page = 1

  const options: GetProductsOptions = {
    pagination: {
      limit: ITEMS_PER_PAGE,
      offset: (page - 1) * ITEMS_PER_PAGE,
    },
  }

  const search = params.get("search")
  if (search) options.search = search.toLowerCase()

  return options
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages]
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}
