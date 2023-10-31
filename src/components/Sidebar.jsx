import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
              className="flex items-center gap-3 cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                navigate("/admin/data");
              }}
              >
                <FontAwesomeIcon icon={faDatabase}/>
              All Data
            </li>
            <li
              className="flex items-center gap-3 cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                navigate("/admin/post");
              }}
              >
                <FontAwesomeIcon icon={faPlus}/>
              Add Data
            </li>
            <li
              className="flex items-center gap-3 cursor-pointer text-white text-lg mb-4"
              onClick={() => {
                
              }}
              >
                <FontAwesomeIcon icon={faRightFromBracket}/>
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar