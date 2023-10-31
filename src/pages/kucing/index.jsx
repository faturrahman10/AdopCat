import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const Kucing = () => {
  const [kucingData, setKucingData] = useState([]);
  const [filterGender, setFilterGender] = useState('all');
  const [filterAge, setFilterAge] = useState('all');
  const [dataStatus, setDataStatus] = useState('loading'); 
  const navigate = useNavigate();

  const fetchKucingData = async () => {
    try {
      const response = await axios.get('https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat');
      setKucingData(response.data);
      setDataStatus("success");
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setDataStatus("error");
    }
  };

  useEffect(() => {
    fetchKucingData();
  }, []);

  if (dataStatus === 'loading') {
    return <div className="w-screen h-screen flex justify-center items-center"><p className="animate-pulse">loading...</p></div>;
  } else if (dataStatus === 'error') {
    return <div className="w-screen h-screen flex justify-center items-center text-red-500">Terjadi kesalahan saat mengambil data.</div>;
  }

  const applyFilters = () => {
    let filteredData = kucingData;

    if (filterGender !== 'all') {
      filteredData = filteredData.filter((kucing) => kucing.gender === filterGender);
    }

    if (filterAge === 'above5') {
      filteredData = filteredData.filter((kucing) => kucing.age > 5);
    } else if (filterAge === 'below5') {
      filteredData = filteredData.filter((kucing) => kucing.age <= 5);
    }

    setKucingData(filteredData);
  };

  const resetFilters = () => {
    setFilterGender('all');
    setFilterAge('all');
    fetchKucingData();
  };

  return (
    <div>
      <Navbar />
      <div className="mx-[5%] pt-20">
        <div className="flex gap-10">
          <div className="w-[20%] h-fit mb-4 p-4 shadow-md">
            <h2 className="font-semibold text-lg mb-5">Filter</h2>
            <div className="mb-7">
              <h3 className="font-semibold mb-3">Jenis Kelamin</h3>
              <select
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
                onChange={(e) => setFilterGender(e.target.value)} value={filterGender}
              >
                <option value="all">Semua</option>
                <option value="Jantan">Jantan</option>
                <option value="Betina">Betina</option>
              </select>
            </div>
            <div className="mb-7">
              <h3 className="font-semibold mb-3">Umur</h3>
              <select
                className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
                onChange={(e) => setFilterAge(e.target.value)} value={filterAge}
              >
                <option value="all">Semua</option>
                <option value="above5">di atas 5 tahun</option>
                <option value="below5">di bawah 5 tahun</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">  
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded" onClick={applyFilters}>
                Filter
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-2 py-1 rounded" onClick={resetFilters}>
                Reset
              </button>
            </div>
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold text-2xl ml-3">Daftar Kucing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
              {kucingData.map((kucing) => (
                <div key={kucing.id} className="w-full rounded-lg p-3 shadow">
                  <img src={kucing.imgURL} alt={`Kucing ${kucing.name}`} className="w-full h-64 object-cover rounded-t-lg" />
                  <h2 className="font-semibold text-lg">{kucing.name}</h2>
                  <p>Umur: {kucing.age} tahun</p>
                  <p>Jenis Kelamin: {kucing.gender}</p>
                  <div className="flex justify-end">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 rounded-lg px-3 py-1 font-semibold text-white mt-4"
                      onClick={() => {
                        navigate(`/cat/detail/${kucing.id}`);
                      }}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kucing;
