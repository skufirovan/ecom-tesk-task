import type { Product } from "@/shared/types"
import { ProductCard } from "../product-card/product-card"
import s from "./product-list.module.css"

type Props = {
  products: Product[]
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className={s.list}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
