import { Link } from "react-router-dom"



function Header() {

    

  return (
    <header className="w-screen shadow-lg">
        <nav className="w-full flex justify-center items-center py-6 px-6">
            <Link to='/' className="h-9 w-26 flex items-center justify-center">
                <p className="text-xl sm:text-4xl hover:scale-105 transition-all text-white">CuCov currency converter</p>
            </Link>
        </nav>
    </header>
  )
}

export default Header
