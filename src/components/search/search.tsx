import { SearchIcon } from "lucide-react"
import { useLocation, useSearchParams, useNavigate } from "react-router-dom"
import { useDebouncedCallback } from "use-debounce"
import s from "./search.module.css"

export const Search = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")

    if (term) params.set("search", term)
    else params.delete("search")

    navigate(`${location.pathname}?${params.toString()}`, { replace: true })
  }, 300)

  return (
    <div className={s.search}>
      <input
        className={s.input}
        placeholder="Найти"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <SearchIcon className={s.icon} />
    </div>
  )
}
