import { Route, Routes } from "react-router-dom"
import { ProductListPage } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
    </Routes>
  )
}

export default App
