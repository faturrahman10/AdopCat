import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { addItem } from '../../features/historySlice';
import Navbar from '../../components/Navbar';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [kucingDetail, setKucingDetail] = useState(null);
  const [isModalAdoptOpen, setIsModalAdoptOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    reason: "",
  });

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
    return <div className="w-screen h-screen flex justify-center items-center"><p className="animate-pulse">loading...</p></div>;
  }

  const handleAdoptClick = () => {
    const username = Cookies.get("email");
    if (username) {
      setIsModalAdoptOpen(true);
    } else {
      Swal.fire({
        text: "Anda harus login terlebih dahulu",
        title: "Login Required",
        icon: "warning",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/auth/loginUser");
        }
      });
    }
  };
  

  const handleAdoptSubmit = () => {
    setIsModalAdoptOpen(false);
    const newItem = {
      id: kucingDetail.id,
      catName: kucingDetail.name,
      catAge: kucingDetail.age,
      catGender: kucingDetail.gender,
      catImage: kucingDetail.imgURL,
      adopterName: formData.name,
      adopterContact: formData.contact,
      adopterAddress: formData.address,
    };
    dispatch(addItem(newItem));
    navigate("/cat/history")
  };

  return (
    <div>
      <Navbar/>
      <div className="pt-20 mx-[20%] mb-10">
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Halo, aku <span className="text-yellow-500">{kucingDetail.name}</span></h1>
        </div>
        <div className="flex flex-col mb-5 justify-center items-center">
          <FontAwesomeIcon
            className="text-slate-600 mb-5"
            size="2x"
            icon={faQuoteLeft}
          />
          <p className="mb-4 text-center text-slate-500 tracking-widest italic">Kita dapat mengukur hati seseorang dengan cara dia memperlakukan hewan</p>
          <p className="font-semibold">Mahat Magandi</p>
          <FontAwesomeIcon
            className="text-slate-600 mt-5"
            size="2x"
            icon={faQuoteLeft}
          />
        </div>
        
        <div className="mb-5">
          <div className="w-full flex h-fit border rounded-t-md shadow-md p-2">
            <div className="w-2/3 mr-8">
              <img className="w-full h-60 object-cover rounded-md" src={kucingDetail.imgURL} alt={`Kucing ${kucingDetail.name}`} />
            </div>
            <div className="w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-lg"><span className="font-semibold inline-block w-36 mb-3">Nama</span>: {kucingDetail.name}</h2>
                <p className="text-lg"><span className="font-semibold inline-block w-36 mb-3">Umur</span>: {kucingDetail.age} tahun</p>
                <p className="text-lg"><span className="font-semibold inline-block w-36 mb-3">Jenis Kelamin</span>: {kucingDetail.gender}</p>
              </div>
              <button
                onClick={handleAdoptClick}
                className="w-full h-14 tracking-widest bg-yellow-500 hover:bg-yellow-600 rounded-lg px-3 font-semibold text-white"
              >
                ADOPSI
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="w-4/6 h-fit border rounded-md shadow-md p-2">
              <h3 className="text-lg font-semibold mb-3">Keadaan {kucingDetail.name}</h3>
              <p>{kucingDetail.description}</p>
            </div>
            <div className="w-2/6 h-fit border rounded-md shadow-md p-2">
              <h3 className="text-lg font-semibold mb-3">Kondisi kesehatan {kucingDetail.name}</h3>
              <p>{kucingDetail.healthCondition}</p>
            </div>
          </div>
        </div>
      </div>
      {isModalAdoptOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="absolute inset-0 bg-gray-800 opacity-50" onClick={() => setIsModalAdoptOpen(false)}></div>
          <div className="w-2/6 bg-white p-4 rounded-lg z-40">
            <h2 className="text-xl font-semibold mb-3">Data Pengadopsi</h2>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Nama</label>
              <input
                type="text"
                value={formData.name}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Alamat</label>
              <input
                type="text"
                value={formData.address}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Kontak</label>
              <input
                type="text"
                value={formData.contact}
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Alasan Adopsi</label>
              <textarea
                value={formData.reason}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                rows="3"
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              />
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Data Kucing</label>
              <div className="flex justify-between border border-gray-300 p-2 rounded">
                <div>
                <p className="text-sm"><span className="inline-block w-28">Nama</span>: {kucingDetail.name}</p>
                <p className="text-sm"><span className="inline-block w-28">Umur</span>: {kucingDetail.age} tahun</p>
                <p className="text-sm"><span className="inline-block w-28">Jenis Kelamin</span>: {kucingDetail.gender}</p>
                </div>
                <div>
                  <img className="w-16 h-16 object-cover rounded-md" src={kucingDetail.imgURL} alt={`Kucing ${kucingDetail.name}`} />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => setIsModalAdoptOpen(false)} className="bg-red-500 hover:bg-red-600 px-2 py-1 cursor-pointer rounded-lg text-white mr-2">
                Batal
              </button>
              <button onClick={handleAdoptSubmit} className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 cursor-pointer rounded-lg text-white">
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
