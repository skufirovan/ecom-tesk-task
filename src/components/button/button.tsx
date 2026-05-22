import { clsx } from "@/shared/utils"
import s from "./button.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
}

export const Button = ({ variant = "primary", className, ...props }: Props) => {
  return (
    <button
      type={props.type || "button"}
      className={clsx(s.button, s[variant], className)}
      {...props}
    >
      {props.children}
    </button>
  )
}
