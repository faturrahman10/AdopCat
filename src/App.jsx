import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Kucing from './pages/kucing';
import Detail from './pages/detail';
import AdminDashboard from './pages/admin/adminDashboard';
import AdminAllData from './pages/admin/adminAllData';
import AdminPost from './pages/admin/adminPost';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Kucing/>} path="/cat/list"/>
        <Route element={<Detail />} path="/cat/detail/:id"/> 
        <Route element={<AdminDashboard />} path="/admin/dashboard"/> 
        <Route element={<AdminAllData />} path="/admin/data"/> 
        <Route element={<AdminPost />} path="/admin/post"/> 
      </Routes>
  </BrowserRouter>
  )
}

export default App
