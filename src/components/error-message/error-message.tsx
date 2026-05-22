import { TriangleAlert } from "lucide-react"
import s from "./error-message.module.css"

type Props = {
  message: string
}

export const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={s.message}>
      <TriangleAlert />
      <span>{message}</span>
    </div>
  )
}
