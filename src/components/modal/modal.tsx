import { X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import s from "./modal.module.css"

type Props = {
  children: React.ReactNode
  onClose: () => void
}

const modalRoot = document.getElementById("modals")

export const Modal = ({ children, onClose }: Props) => {
  useEffect(() => {
    document.body.classList.add("modal-open")

    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose()
    }

    document.addEventListener("keydown", handleEsc)

    return () => {
      document.body.classList.remove("modal-open")
      document.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div
        className={s.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className={s.button}>
          <X />
        </button>
        {children}
      </div>
    </div>,
    modalRoot as HTMLDivElement
  )
}
