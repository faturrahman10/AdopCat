import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const username = Cookies.get("email");

  const handleAuth = () => {
    if (username) {
      Swal.fire({
        text: "LogOut sekarang?",
        title: "Logout",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          Cookies.remove("email");
          Cookies.remove("token");
          navigate("/auth/loginUser");
        }
      });
    } else {
      Swal.fire({
        text: "LogIn Sekarang?",
        title: "Login",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/auth/loginUser")
        }
      });
    }
  };
  

  const handleHistoryClick = () => {
    if (username) {
      navigate("/cat/history");
    } else {
      Swal.fire({
        text: "Anda harus login terlebih dahulu",
        title: "Login Required",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };
  

  return (
    <div>
      <nav className="px-20 h-16 flex justify-between items-center fixed top-0 right-0 left-0 z-20 bg-white shadow-md">
        <div>
          <a href="/" className="font-semibold text-3xl">adop<span className="text-yellow-500">cat</span></a>
        </div>
        <div>
          <ul className="flex justify-between items-center43 gap-10">
            <li
              className="text-lg font-semibold text-slate-500 hover:text-yellow-600 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
              >
              Home
            </li>
            <li
              className="text-lg font-semibold text-slate-500 hover:text-yellow-600 cursor-pointer"
              onClick={() => {
                navigate("/cat/list");
              }}
            >
              Adopsi
            </li>
            <li 
              className="text-lg font-semibold text-slate-500 hover:text-yellow-600 cursor-pointer"
              onClick={() => {
                navigate("/cat/chatBot");
              }}
            >
              QnA
            </li>
            <li 
              className="text-lg font-semibold text-slate-500 hover:text-yellow-600 cursor-pointer"
              onClick={handleHistoryClick}
            >
              History
            </li>
          </ul>
        </div>
        <div>
          <div
            className="px-3 py-1 bg-yellow-500 hover:bg-yellow-500 rounded-md text-white font-semibold cursor-pointer"
            onClick={() => handleAuth()}
          >
            {username ? "LogOut" : "LogIn"}  
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar