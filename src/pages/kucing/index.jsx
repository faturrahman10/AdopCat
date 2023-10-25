import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const Kucing = () => {
  const [kucingData, setKucingData] = useState([]);
  const [filterGender, setFilterGender] = useState('all');
  const [filterAge, setFilterAge] = useState('all');
  const navigate = useNavigate();

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
      <div className="mx-[10%] pt-16">
        <div className="mb-4">
          <select onChange={(e) => setFilterGender(e.target.value)} value={filterGender}>
            <option value="all">Semua</option>
            <option value="Jantan">Jantan</option>
            <option value="Betina">Betina</option>
          </select>
          <select onChange={(e) => setFilterAge(e.target.value)} value={filterAge}>
            <option value="all">Semua</option>
            <option value="above5">di atas 5 tahun</option>
            <option value="below5">di bawah 5 tahun</option>
          </select>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded" onClick={applyFilters}>
            Terapkan Filter
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded" onClick={resetFilters}>
            All
          </button>
        </div>

        {kucingData.map((kucing) => (
          <div key={kucing.id} className="w-1/4 rounded-lg p-3 shadow">
            <img src={kucing.imgURL} alt={`Kucing ${kucing.name}`} className="w-full h-64 object-cover rounded-t-lg" />
            <h2 className="font-semibold text-lg">{kucing.name}</h2>
            <p>Umur: {kucing.age} tahun</p>
            <p>Jenis Kelamin: {kucing.gender}</p>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 rounded-lg px-3 py-1 font-semibold text-white"
              onClick={() => {
                navigate(`/cat/detail/${kucing.id}`);
              }}
            >
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kucing;
