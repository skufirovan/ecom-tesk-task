import {
  SORT_FIELDS,
  SORT_ORDERS,
  type GetProductsOptions,
} from "@/api/products-api"
import { ITEMS_PER_PAGE } from "./constants"

export function clsx(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ")
}

function isOneOf<T extends readonly string[]>(
  value: string | null,
  values: T
): value is T[number] {
  return value !== null && values.includes(value)
}

export function parseSearchOptions(params: URLSearchParams) {
  const pageParam = params.get("page")
  let page = pageParam ? Number(pageParam) : 1

  if (Number.isNaN(page) || page < 1) page = 1

  const options: GetProductsOptions = {
    pagination: {
      limit: ITEMS_PER_PAGE,
      offset: (page - 1) * ITEMS_PER_PAGE,
    },
  }

  const search = params.get("search")
  if (search) options.search = search.toLowerCase()

  const sort = params.get("sort")
  const order = params.get("order")

  if (isOneOf(sort, SORT_FIELDS) && isOneOf(order, SORT_ORDERS)) {
    options.sorting = {
      sort,
      order,
    }
  }

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
