import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-2/12 fixed left-0 top-0 bottom-0 bg-slate-500">
      <div>
          <a href="/admin/dashboard" className="font-semibold text-3xl text-white">adop<span className="text-yellow-500">cat</span></a>
        </div>
        <div>
          <ul>
          <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/admin/dashboard");
              }}
              >
              Dashboard
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/admin/data");
              }}
              >
              All Data
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                navigate("/admin/post");
              }}
              >
              Post
            </li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar