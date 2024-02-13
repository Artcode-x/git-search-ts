import { Route, Routes } from "react-router-dom"
import Main from "../../pages/Main/Main"
import NotFound from "../../pages/NotFound/NotFound"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
