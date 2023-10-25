import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../../../components/AdminNavbar';

const AdminAllData = () => {
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

  const handleDeleteKucing = async (id) => {
    try {
      await axios.delete(
        `https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat/${id}`
      );
      setKucingData((prevData) => prevData.filter((kucing) => kucing.id !== id));
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus kucing:', error);
    }
  };

  return (
    <div>
      <AdminNavbar/>
      <div className="pl-[20%]">
        <h1 className="text-3xl font-semibold mb-4">All Data</h1>
        <table className="min-w-full">
          <thead>
            <tr className="bg-green-100">
              <th className="p-2">Name</th>
              <th className="p-2">Age</th>
              <th className="p-2">Gender</th>
              <th className="p-2">Image</th>
              <th className="p-2">Health Condition</th>
              <th className="p-2">Description</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {kucingData.map((kucing) => (
              <tr key={kucing.id} className="bg-white">
                <td className="p-2">{kucing.name}</td>
                <td className="p-2">{kucing.age} tahun</td>
                <td className="p-2">{kucing.gender}</td>
                <td className="p-2">
                  <img src={kucing.imgURL} alt={`Kucing ${kucing.name}`} className="w-12 h-12" />
                </td>
                <td className="p-2">{kucing.healthCondition}</td>
                <td className="p-2">{kucing.description}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDeleteKucing(kucing.id)}
                    className="text-red-500 hover:underline cursor-pointer"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllData;
