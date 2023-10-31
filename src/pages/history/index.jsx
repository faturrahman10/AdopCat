import Navbar from "../../components/Navbar"
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.history);

  return (
    <div>
      <Navbar/>
      <div className="pt-20 mx-[20%]">
        <h1 className="font-bold text-2xl">History Adopsi</h1>
        <div>
          {history.items.length === 0 ? (
            <div className="text-center mt-20">
              <p className="font-semibold">Tidak ada history adopsi</p>
            </div>
          ) : (
            <div>
              {history.items.map((item) => (
                <div key={item.id} className="flex justify-between h-32 border rounded-md p-2 my-4 shadow-sm">
                  <div>
                  <h3 className="font-semibold mb-3">Pengadopsi</h3>
                  <p><span className="inline-block w-20">Nama</span>: {item.adopterName}</p>
                  <p><span className="inline-block w-20">Kontak</span>: {item.adopterContact}</p>
                  <p><span className="inline-block w-20">Alamat</span>: {item.adopterAddress}</p>
                </div>
                <div className="flex gap-5">
                  <div>
                    <h3 className="font-semibold mb-3">Kucing</h3>
                    <div>
                      <div>
                        <p><span className="inline-block w-32">Nama</span>: {item.catName}</p>
                        <p><span className="inline-block w-32">Umur</span>: {item.catAge} tahun</p>
                        <p><span className="inline-block w-32">Jenis Kelamin</span>: {item.catGender}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={item.catImage} alt={`Kucing ${item.catName}`} className="w-24 h-28 object-cover rounded-md" />
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default History;
