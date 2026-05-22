import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getProducts } from "@/api/products-api"
import { ErrorMessage, ProductList, Search, Spinner } from "@/components"
import type { Product } from "@/shared/types"
import { parseSearchOptions } from "@/shared/utils"
import s from "./product-list-page.module.css"

export const ProductListPage = () => {
  const [searchParams] = useSearchParams()
  const options = parseSearchOptions(searchParams)
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    getProducts(options)
      .then(setProducts)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [searchParams])

  if (error) return <ErrorMessage message={error.message} />

  return (
    <section className={s.page}>
      <h1>Товары</h1>
      <Search />
      {isLoading ? <Spinner /> : <ProductList products={products} />}
    </section>
  )
}
