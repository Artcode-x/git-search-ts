import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import GlobalStyles from "./components/GlobalStyles/GlobalStyles"
import { HashRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
