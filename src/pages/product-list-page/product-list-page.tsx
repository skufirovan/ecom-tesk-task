import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getProducts, type GetProductsResponse } from "@/api/products-api"
import {
  ErrorMessage,
  Pagination,
  ProductList,
  Search,
  Sorting,
  Spinner,
} from "@/components"
import { parseSearchOptions } from "@/shared/utils"
import s from "./product-list-page.module.css"

export const ProductListPage = () => {
  const [searchParams] = useSearchParams()
  const options = parseSearchOptions(searchParams)
  const [productsResponse, setProductsResponse] = useState<GetProductsResponse>(
    { products: [], total: 0 }
  )
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    getProducts(options)
      .then(setProductsResponse)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [searchParams])

  if (error) return <ErrorMessage message={error.message} />

  return (
    <section className={s.page}>
      <h1>Товары</h1>

      <div className={s.content}>
        <aside className={s.sidebar}>
          <Sorting />
        </aside>

        <div className={s.main}>
          <div className={s.toolbar}>
            <Search />
            <div className={s.mobileSorting}>
              <Sorting />
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <ProductList products={productsResponse.products} />
              <Pagination total={productsResponse.total} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
