import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Kucing from './pages/kucing';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Kucing/>} path="/cat/list"/>
        <Route element={<Kucing/>} path="/cat/detail/:id"/>
      </Routes>
  </BrowserRouter>
  )
}

export default App
