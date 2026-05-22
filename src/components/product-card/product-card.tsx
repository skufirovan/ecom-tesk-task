import { useState } from "react"
import type { Product } from "@/shared/types"
import { Modal } from "../modal/modal"
import { ProductDetailed } from "../product-detailed/product-detailed"
import s from "./product-card.module.css"

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <div className={s.card} onClick={handleOpen}>
        <img src={product.image} className={s.image} alt={product.title} />
        <div className={s.info}>
          <h3>{product.title}</h3>
          <p className={s.price}>{product.price.toLocaleString()} ₽</p>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={handleClose}>
          <ProductDetailed product={product} />
        </Modal>
      )}
    </>
  )
}
