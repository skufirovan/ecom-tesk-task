import type { GetProductsOptions } from "@/api/products-api"

export function clsx(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ")
}

export function parseSearchOptions(params: URLSearchParams) {
  const options: GetProductsOptions = {
    pagination: {
      limit: 10,
      offset: 0,
    },
  }

  const search = params.get("search")
  if (search) options.search = search.toLowerCase()

  return options
}
