import type { Product } from "@/shared/types"
import productsData from "./mock.json"

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const products = productsData as Product[]

        if (!Array.isArray(products))
          throw new Error("Не удалось загрузить товары")

        resolve(products)
      } catch (error) {
        reject(error)
      }
    }, 300)
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
