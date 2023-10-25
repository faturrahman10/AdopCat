import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [kucingDetail, setKucingDetail] = useState(null);

  const fetchKucingDetail = async () => {
    try {
      const response = await axios.get(`https://6535e17bc620ba9358ecbd75.mockapi.io/adopcat/${id}`);
      setKucingDetail(response.data);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  useEffect(() => {
    fetchKucingDetail();
  }, [id]);

  if (!kucingDetail) {
    return <p>Mengambil data...</p>;
  }

  return (
    <div>
      <h2>{kucingDetail.name}</h2>
      <p>Umur: {kucingDetail.age} tahun</p>
      <p>Jenis Kelamin: {kucingDetail.gender}</p>
      <img src={kucingDetail.imgURL} alt={`Kucing ${kucingDetail.name}`} />
      <p>{kucingDetail.heathCondition}</p>
      <p>{kucingDetail.description}</p>
      <button className="bg-yellow-500 hover:bg-yellow-600 rounded-lg px-3 py-1 font-semibold text-white">
        Adopsi
      </button>
    </div>
  );
};

export default Detail;
