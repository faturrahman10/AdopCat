import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../../components/Sidebar';

const AdminPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    imgURL: '',
    healthCondition: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat',
        formData
      );
      console.log('Data kucing baru berhasil ditambahkan:', response.data);
      setFormData({
        name: '',
        age: '',
        gender: '',
        imgURL: '',
        healthCondition: '',
        description: '',
      });
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
    navigate("/admin/data")
  };

  return (
    <div>
      <Sidebar/>
      <div className="pl-[20%] pt-5 pr-10">
        <h1 className="text-3xl font-semibold mb-4">Post Data</h1>
        <div className="flex justify-center">
          <div className="w-[80%]">
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label htmlFor="age" className="block font-semibold mb-1">Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <label htmlFor="gender" className="block font-semibold mb-1">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4 w-1/2">
                <label htmlFor="imgURL" className="block font-semibold mb-1">Image URL</label>
                <input
                  type="text"
                  id="imgURL"
                  name="imgURL"
                  value={formData.imgURL}
                  onChange={handleInputChange}
                  className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="healthCondition" className="block font-semibold mb-1">Health Condition</label>
              <textarea
                type="text"
                id="healthCondition"
                name="healthCondition"
                value={formData.healthCondition}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-semibold mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                rows="4"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Kirim Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPost;
