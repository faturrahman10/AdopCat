import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer';

const Home = () => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `kamu adalah dokter hewan yang menjawab pertanyaan ${input}`,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center px-[5%] mx-[5%]">
        <div className="pt-16 relative w-1/2 h-screen">
          <div className="absolute w-[500px] h-[500px] bg-yellow-500 rounded-full"></div>
          <img className="absolute -top-20 w-[550px] h-auto" src="/img/catHome1.png" alt="kucing" />
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

      <div className="aboutUs mt-24 mx-[5%]" id="aboutUs">
        <div className="relative">
          <div className="w-2/3 absolute z-20 top-32">
            <h2 className="font-semibold text-2xl mb-3 text-yellow-500">About Us</h2>
            <p className="leading-9 tracking-widest text-lg font-normal text-slate-500">
            <span className="font-semibold text-slate-800">adop<span className="text-yellow-500">cat</span></span> merupakan tempat menebar kasih sayang, terhusus untuk kucing-kucing terlantar diluar sana. Kami ingin mengajak Anda untuk mempertimbangkan adopsi sebagai cara sarana untuk memperluas kebaikan. Adopsi adalah tindakan luar biasa yang dapat memberi harapan dan cinta kepada kucing yang telah mengalami kesulitan. <span className="font-semibold text-slate-800">Mari kita bersama-sama menciptakan cerita bahagia bersama teman baru</span>.
            </p>
          </div>
          <div>
            <img className="w-full h-auto" src="/img/catHome2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#fff3ea] py-10">
        <h2 className="font-semibold text-2xl text-center mb-3 text-yellow-500">Manfaat Adopsi Kucing</h2>
        <div className="flex justify-center">
          <div>
            <div className="h-[420px] flex justify-center">
              <img src="/img/manfaat1.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Teman Baru</p>
              <p className="text-sm text-slate-400">Kehidupan baru dengna teman yang baru akan memberikan cerita yang berbeda dalam hidup</p>
            </div>
          </div>
          <div>
            <div className="h-[420px] flex justify-center">
              <img src="/img/manfaat2.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Berbagi Kebahagiaan</p>
              <p className="text-sm text-slate-400">Adopsi adalah cara untuk mengambil tindakan nyata dalam menyebarkan kasih sayang dan kebahagiaan hidup</p>
            </div>
          </div>
          <div>
            <div className="h-[420px] flex justify-center">
              <img src="/img/manfaat3.png" alt="" />
            </div>
            <div className="text-center px-10">
              <p className="font-semibold text-lg mb-3">Harapan Baru Kucing</p>
              <p  className="text-sm text-slate-400">Anda telah memberikan harapan hidup baru bagi si kucing dalam menemukan tempat bernaung dan menemukan kebahagiaan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 mx-[20%] mb-20" id="QnA">
        <h2 className="font-semibold text-2xl text-center mb-5 text-yellow-500">QnA</h2>
        <div>
          <div className="flex justify-between">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[75%] h-12 p-2 mr-5 mb-4 border border-gray-300 rounded focus:outline-none"
              placeholder="Pertanyaan anda disini..."
            />
            <button
              onClick={handleSubmit}
              className="w-[20%] h-12 bg-yellow-500 font-semibold text-white rounded hover:bg-yellow-600 cursor-pointer"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          <div className="mt-4">
            <div
              className="w-full h-36 overflow-auto p-2 border border-gray-300 rounded focus:outline-none"
            >
              {loading ? "Memuat Jawaban..." : response}
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home