import type { Product } from "@/shared/types"
import productsData from "./mock.json"

export type GetProductsOptions = {
  search?: string
  pagination: {
    limit: number
    offset: number
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

        let result = products
        const { offset, limit } = options.pagination
        result = result.slice(offset, offset + limit)

        const search = options.search
        if (search) {
          result = result.filter((p) => p.title.toLowerCase().includes(search))
        }

        resolve({ products: result, total: products.length })
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
