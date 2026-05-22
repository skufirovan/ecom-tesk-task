import type { Product } from "@/shared/types"
import s from "./product-card.module.css"

type Props = {
  product: Product
}

export const ProductCatrd = ({ product }: Props) => {
  return (
    <div className={s.card}>
      <img src={product.image} className={s.image} alt={product.title} />
      <div className={s.info}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className={s.price}>{product.price.toLocaleString()} ₽</p>
      </div>
    </div>
  )
}
