import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App


// primary #f9f7f3 
// secondary #1b2629 
// btncolor #9c702a