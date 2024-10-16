import { Outlet } from "react-router-dom"
import Header from "./Assets/Header"
import Footer from "./Assets/Footer"

function App() {

  return (
    <div className="box-border w-full h-full flex bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] justify-between flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
