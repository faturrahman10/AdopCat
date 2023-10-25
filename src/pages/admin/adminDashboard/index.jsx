import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/AdminNavbar';

const AdminDashboard = () => {
  const [kucingData, setKucingData] = useState([]);

  const fetchKucingData = async () => {
    try {
      const response = await axios.get('https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat');
      setKucingData(response.data);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  useEffect(() => {
    fetchKucingData();
  }, []);

  return (
    <div>
      <AdminNavbar/>
      <div className="pl-[20%]">
        <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
        <div className="bg-yellow-400 p-4 w-1/5 rounded-lg">
          <p className="text-lg text-white font-semibold">Jumlah Kucing</p>
          <p className="text-xl text-white">{kucingData.length} kucing</p>
        </div>
        <div className="mt-8">
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Age</th>
                <th className="p-2 text-left">Gender</th>
                <th className="p-2 text-left">Image</th>
              </tr>
            </thead>
            <tbody>
              {kucingData.slice(0, 3).map((kucing) => (
                <tr key={kucing.id} className="bg-white">
                  <td className="p-2">{kucing.name}</td>
                  <td className="p-2">{kucing.age} tahun</td>
                  <td className="p-2">{kucing.gender}</td>
                  <td className="p-2">
                    <img src={kucing.imgURL} alt={`Kucing ${kucing.name}`} className="w-20 h-16 object-cover" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
