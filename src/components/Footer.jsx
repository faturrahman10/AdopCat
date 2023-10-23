const Footer = () => {
  return (
    <div>
      <div className="bg-yellow-500 flex gap-36 px-[5%] py-[3%]">
        <div>
          <a href="/" className="font-semibold text-3xl">adop<span className="text-white">cat</span></a>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-white">Information Content</h2>
          <div>
            <ul>
              <li className="text-white">
                <a href="/">Home</a>
              </li>
              <li className="text-white">
                <a href="/cat/list">Adopsi Kucing</a>
              </li>
              <li className="text-white">
                <a href="/cat/chatbot">Chat Bot</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-white">Social Media</h2>
          <div>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-white">Contact</h2>
          <div>
            <ul>
              <li className="text-white"><span className="font-semibold">Phone</span> : +62 821 1010 1010</li>
              <li className="text-white"><span className="font-semibold">Email</span> : adopcat@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer