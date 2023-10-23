const Navbar = () => {
  return (
    <div>
      <nav className="px-20 h-16 flex justify-between items-center fixed top-0 right-0 left-0 z-50 bg-white">
        <div>
          <a href="/" className="font-semibold text-3xl">adop<span className="text-yellow-500">cat</span></a>
        </div>
        <div>
          <ul className="flex justify-between gap-10">
            <li className="text-lg font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer">
              <a href="#aboutUs">About Us</a>
            </li>
            <li className="text-lg font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer">
              <a href="">Adopsi</a>
            </li>
            <li className="text-lg font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer">
              <a href="#QnA">QnA</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar