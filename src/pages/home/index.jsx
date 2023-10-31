
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center px-[5%] mx-[5%]">
        <div className="pt-20 w-1/2 h-screen">
          <img src="/img/catHomeCoba.png" className="-mt-[16%] w-[550px] h-auto" alt="" />
        </div>
        <div className="flex flex-col justify-center w-1/2 h-screen pt-16 pl-[5%] relative">
          <div className="mb-7">
            <p className="text-4xl font-semibold text-yellow-500 leading-snug">AYO! <br /> BERSAMA SAHABAT KECIL <br /> KITA MULAI PERJALANAN BARU </p>
            <p className="font-semibold text-slate-500">Rumah baru akan memberikan kenyamanan bagi mereka</p>
          </div>
          <a href="/cat/list">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-xl text-white font-semibold tracking-widest">Mulai Adopsi</button>
          </a>
        </div>
      </div>

      <div className="aboutUs mt-24 mx-[5%]">
        <div className="relative" id="aboutUs">
          <div className="w-2/3 absolute z-10 top-32">
            <h2 className="font-semibold text-2xl mb-3 text-yellow-500">About Us</h2>
            <p className="leading-9 tracking-widest text-lg font-normal text-slate-500">
            <span className="font-semibold text-slate-800">adop<span className="text-yellow-500">cat</span></span> merupakan tempat menebar kasih sayang, terhusus untuk kucing-kucing terlantar diluar sana. Kami ingin mengajak Anda untuk mempertimbangkan adopsi sebagai cara sarana untuk memperluas kebaikan. Adopsi adalah tindakan luar biasa yang dapat memberi harapan dan cinta kepada kucing yang mengalami kesulitan diluar sana. <span className="font-semibold text-slate-800">Mari kita bersama-sama menciptakan cerita bahagia bersama teman baru</span>.
            </p>
          </div>
          <div>
            <img className="w-full h-auto" src="/img/catHome2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#fff3ea] py-14">
        <h2 className="font-semibold text-2xl text-center mb-3 text-slate-500">Manfaat Adopsi Kucing</h2>
        <div className="flex justify-center gap-5">
          <div className="w-1/3">
            <div className="h-[420px] flex justify-center">
              <img className="object-cover" src="/img/manfaat1.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Teman Baru</p>
              <p className="text-sm text-slate-400">Kehidupan baru dengna teman yang baru akan memberikan cerita yang berbeda dalam hidup</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="h-[420px] flex justify-center">
              <img className="object-cover" src="/img/manfaat2.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Berbagi Kebahagiaan</p>
              <p className="text-sm text-slate-400">Adopsi adalah cara untuk mengambil tindakan nyata dalam menyebarkan kasih sayang dan kebahagiaan hidup</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="h-[420px] flex justify-center">
              <img className="object-cover" src="/img/manfaat3.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Harapan Baru Kucing</p>
              <p  className="text-sm text-slate-400">Anda telah memberikan harapan hidup baru bagi si kucing dalam menemukan tempat bernaung dan menemukan kebahagiaan</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home