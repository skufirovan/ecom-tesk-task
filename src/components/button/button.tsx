import { clsx } from "@/shared/utils"
import s from "./button.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "sm"
}

export const Button = ({
  variant = "primary",
  size = "default",
  className,
  ...props
}: Props) => {
  return (
    <button
      type={props.type || "button"}
      className={clsx(s.button, s[variant], s[size], className)}
      {...props}
    >
      {props.children}
    </button>
  )
}
