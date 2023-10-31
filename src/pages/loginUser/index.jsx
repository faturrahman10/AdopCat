import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        if (response?.data?.token) {
          Swal.fire({
            icon: "success",
            title: "Successfully Login!",
            confirmButtonText: "OK",
          }).then((res) => {
            if (res.isConfirmed) {
              Cookies.set("email", email);
              Cookies.set("token", response?.data?.token);
              navigate("/");
            }
          });
        }
        Cookies.set("email", email);
        Cookies.set("token", response?.data?.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-100 h-screen flex justify-center items-center bg-[url('/img/bgLogin.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-600 opacity-30"></div>
        <div className="w-1/2 bg-opacity-50 backdrop-blur-lg rounded-lg py-10 px-5 flex justify-center items-center gap-4">  
          <div className="w-1/2 flex flex-col mb-5 justify-center items-center">
            <FontAwesomeIcon
              className="text-slate-200 mb-5"
              size="2x"
              icon={faQuoteLeft}
            />
            <p className="mb-4 text-center text-slate-100 tracking-widest italic">Kita dapat mengukur hati seseorang dengan cara dia memperlakukan hewan</p>
            <p className="font-semibold tracking-widest text-white">Mahat Magandi</p>
            <FontAwesomeIcon
              className="text-slate-200 mt-5"
              size="2x"
              icon={faQuoteLeft}
            />
          </div>
          <div className="w-1/2 bg-slate-100 bg-opacity-10 backdrop-blur-md px-5 py-4 rounded-xl">
            <h1 className="font-bold mb-3 tracking-widest text-2xl text-center text-yellow-500">LOGIN</h1>
            <form onSubmit={handleLogin} action="">
              <div className="mb-5">
                <label className="font-semibold text-slate-200 tracking-widest" htmlFor="username">Email</label>
                <input
                  className="w-full h-10 mt-2 rounded-md focus:outline-none p-2 bg-transparent border border-yellow-500 text-white"
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label className="font-semibold text-slate-200 tracking-widest" htmlFor="password">Password</label>
                <input
                  className="w-full h-10 mt-2 rounded-md focus:outline-none p-2 bg-transparent border border-yellow-500 text-white"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg tracking-widest text-white font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login