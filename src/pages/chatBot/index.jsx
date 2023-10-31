import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Navbar from "../../components/Navbar"

const ChatBot = () => {
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
        max_tokens: 200,
      });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar/>
      <div className="pt-20 mx-[20%] mb-20">
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
              className={`w-[20%] h-12 bg-yellow-500 font-semibold text-white rounded hover:bg-yellow-600 cursor-pointer ${loading ? "animate-pulse" : ""}`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          <div className="mt-4">
            <div
              className={`w-full h-36 overflow-auto p-2 border border-gray-300 rounded focus:outline-none ${loading ? 'animate-pulse' : ""}`}
            >
              {loading ? "Memuat Jawaban..." : response}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBot