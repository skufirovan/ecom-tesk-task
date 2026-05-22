import { Loader } from "lucide-react"
import s from "./spinner.module.css"

export const Spinner = () => {
  return (
    <div className={s.spinner}>
      <Loader className={s.icon} />
      <span>Загрузка...</span>
    </div>
  )
}
