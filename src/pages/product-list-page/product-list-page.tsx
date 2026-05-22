import { useState, useEffect } from "react"
import { getProducts } from "@/api/products-api"
import { ErrorMessage, ProductList, Spinner } from "@/components"
import type { Product } from "@/shared/types"
import s from "./product-list-page.module.css"

export const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    getProducts()
      .then(setProducts)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage message={error.message} />

  return (
    <section className={s.page}>
      <h1 className={s.title}>Товары</h1>
      <ProductList products={products} />
    </section>
  )
}
