import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Kucing from './pages/kucing';
import Detail from './pages/detail';
import AdminAllData from './pages/admin/adminAllData';
import AdminPost from './pages/admin/adminPost';
import ChatBot from './pages/chatBot';
import History from './pages/history';
import LoginUser from './pages/loginUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<LoginUser/>} path="/auth/loginUser"/>
        <Route element={<Kucing/>} path="/cat/list"/>
        <Route element={<Detail />} path="/cat/detail/:id"/>
        <Route element={<ChatBot />} path="/cat/chatBot"/>
        <Route element={<History />} path="/cat/history"/>
        <Route element={<AdminAllData />} path="/admin/data"/> 
        <Route element={<AdminPost />} path="/admin/post"/> 
      </Routes>
  </BrowserRouter>
  )
}

export default App
