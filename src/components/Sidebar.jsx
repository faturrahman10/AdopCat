import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-2/12 fixed left-0 top-0 bottom-0 bg-slate-400">
        <div className="mb-10 mt-5   text-center">
          <a href="/admin/dashboard" className="font-semibold text-3xl text-white">adop<span className="text-yellow-500">cat</span></a>
        </div>
        <div>
          <ul className="pl-5">
            <li
              className="cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                navigate("/admin/data");
              }}
              >
              All Data
            </li>
            <li
              className="cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                navigate("/admin/post");
              }}
              >
              Add Data
            </li>
            <li
              className="cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                
              }}
              >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar