import type { Product } from "@/shared/types"
import productsData from "./mock.json"

export const SORT_FIELDS = ["price"] as const
export const SORT_ORDERS = ["asc", "desc"] as const

export type SortField = (typeof SORT_FIELDS)[number]
export type SortOrder = (typeof SORT_ORDERS)[number]

export type GetProductsOptions = {
  search?: string
  pagination: {
    limit: number
    offset: number
  }
  sorting?: {
    sort: SortField
    order: SortOrder
  }
}

export type GetProductsResponse = {
  products: Product[]
  total: number
}

export function getProducts(
  options: GetProductsOptions
): Promise<GetProductsResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const products = productsData as Product[]

        if (!Array.isArray(products))
          throw new Error("Не удалось загрузить товары")

        let result = [...products]

        const search = options.search
        if (search) {
          result = result.filter((p) => p.title.toLowerCase().includes(search))
        }

        if (options.sorting) {
          const { sort, order } = options.sorting

          result.sort((a, b) => {
            return order === "asc" ? a[sort] - b[sort] : b[sort] - a[sort]
          })
        }

        const { offset, limit } = options.pagination

        resolve({
          products: result.slice(offset, offset + limit),
          total: result.length,
        })
      } catch (error) {
        reject(error)
      }
    }, 0)
  })
}

export function getProductById(id: number): Promise<Product> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const products = productsData as Product[]

        if (!Array.isArray(products))
          throw new Error("Не удалось загрузить товары")

        const product = products.find((p) => p.id === id)

        if (!product) throw new Error("Не удалось найти товар")

        resolve(product)
      } catch (error) {
        reject(error)
      }
    }, 300)
  })
}
