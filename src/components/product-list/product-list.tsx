import type { Product } from "@/shared/types"
import { ProductCatrd } from "../product-card/product-card"
import s from "./product-list.module.css"

type Props = {
  products: Product[]
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className={s.list}>
      {products.map((p) => (
        <ProductCatrd key={p.id} product={p} />
      ))}
    </div>
  )
}
