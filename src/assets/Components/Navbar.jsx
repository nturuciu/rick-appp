import { Link } from "react-router-dom"
const Navbar =() => {
    return (
        <nav className ="w-full h-10 bg-gray-600 flex items-center">
            <div className="w-full flex gap-4 ml-10 text-white">
                <Link to ='/'> Home </Link>
                <Link to ='/About'>About</Link>
                <Link to = '/Contact'>Contact</Link>
                            </div>
        </nav>
    )
}
export default Navbar