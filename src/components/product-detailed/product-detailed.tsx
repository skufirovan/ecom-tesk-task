import type { Product } from "@/shared/types"
import { Button } from "../button/button"
import s from "./product-detailed.module.css"

type Props = {
  product: Product
}

export const ProductDetailed = ({ product }: Props) => {
  return (
    <div className={s.card}>
      <img src={product!.image} className={s.image} alt={product!.title} />
      <div className={s.info}>
        <h3>{product!.title}</h3>
        <p>{product!.description}</p>
        <div className={s.priceContainer}>
          <Button>Купить</Button>
          <p className={s.price}>{product!.price.toLocaleString()} ₽</p>
        </div>
      </div>
    </div>
  )
}
