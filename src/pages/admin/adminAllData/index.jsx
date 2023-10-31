import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Sidebar';

const AdminAllData = () => {
  const [kucingData, setKucingData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedKucing, setEditedKucing] = useState({
    name: "",
    age: "",
    gender: "",
    imgURL: "",
    heatchCondition: "",
    description: ""
  });

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

  const handleEditKucing = (kucing) => {
    setEditedKucing(kucing);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try{
      await axios.put(`https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat/${editedKucing.id}`, editedKucing);
      setIsEditModalOpen(false);
      setKucingData((prevData) => prevData.map((kucing) => (kucing.id === editedKucing.id ? editedKucing : kucing)));
    } catch (error) {
      console.log("terjadi kesalahan saat mengedit kucing", error)
    }
  }

  return (
    <div>
      <Sidebar/>
      <div className="pl-[20%] pr-10">
        <h1 className="text-3xl font-semibold mb-4 mt-5">All Data</h1>
        <div className="bg-yellow-400 p-3 w-1/5 rounded-lg mb-5">
          <p className="text-xl text-white mb-5 font-semibold">Jumlah Kucing</p>
          <p className="text-lg text-white">{kucingData.length} kucing</p>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-green-100">
              <th className="p-2 text-left w-[8%]">Name</th>
              <th className="p-2 text-left w-[8%]">Age</th>
              <th className="p-2 text-left w-[8%]">Gender</th>
              <th className="p-2 text-left w-[14%]">Image</th>
              <th className="p-2 text-left w-[16%]">Health Condition</th>
              <th className="p-2 text-left w-[33%]">Description</th>
              <th className="p-2 text-left w-[13%]">Action</th>
            </tr>
          </thead>
          <tbody>
            {kucingData.map((kucing) => (
              <tr key={kucing.id} className="bg-white">
                <td className="p-2 text-left align-top">{kucing.name}</td>
                <td className="p-2 text-left align-top">{kucing.age} tahun</td>
                <td className="p-2 text-left align-top">{kucing.gender}</td>
                <td className="p-2 text-left align-top">
                  <img src={kucing.imgURL} alt={`Kucing ${kucing.name}`} className="w-32 h-24 object-cover text-left align-top" />
                </td>
                <td className="p-2 text-left align-top">{kucing.healthCondition}</td>
                <td className="p-2 text-left align-top">{kucing.description}</td>
                <td className="p-2 text-left align-top">
                  <button
                    onClick={() => handleDeleteKucing(kucing.id)}
                    className="bg-red-500 hover:bg-red-600 px-2 py-1 cursor-pointer rounded-lg text-white mr-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditKucing(kucing)}
                    className="bg-green-500 hover:bg-green-600 px-2 py-1 cursor-pointer rounded-lg text-white"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => setIsEditModalOpen(false)}></div>
          <div className="w-2/6 bg-white p-4 rounded-lg z-20">
            <h2 className="text-xl font-semibold mb-3">Edit Data</h2>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Nama</label>
              <input
                type="text"
                value={editedKucing.name}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setEditedKucing({ ...editedKucing, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Umur</label>
              <input
                type="text"
                value={editedKucing.age}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setEditedKucing({ ...editedKucing, age: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Jenis Kelamin</label>
              <input
                type="text"
                value={editedKucing.gender}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setEditedKucing({ ...editedKucing, gender: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">URL Gambar</label>
              <input
                type="text"
                value={editedKucing.imgURL}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setEditedKucing({ ...editedKucing, imgURL: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Kondisi Kesehatan</label>
              <textarea
                value={editedKucing.healthCondition}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                rows="3"
                onChange={(e) => setEditedKucing({ ...editedKucing, healthCondition: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Deskripsi</label>
              <textarea
                value={editedKucing.description}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                rows="3"
                onChange={(e) => setEditedKucing({ ...editedKucing, description: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <button onClick={() => setIsEditModalOpen(false)} className="bg-red-500 hover-bg-red-600 px-2 py-1 cursor-pointer rounded-lg text-white mr-2">
                Batal
              </button>
              <button onClick={handleSaveEdit} className="bg-yellow-500 hover-bg-yellow-600 px-2 py-1 cursor-pointer rounded-lg text-white">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAllData;
