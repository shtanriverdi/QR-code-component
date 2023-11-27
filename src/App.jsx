export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#d1d9e6]">
      <div className="flex flex-col bg-[#ffffff] h-[36rem] w-96 rounded-[20px]">
        <div className="basis-2/3 m-4">
          <img className="rounded-[10px] object-contain w-full" src="./qr.png" alt="QR Image" />
        </div>
        <div className="basis-1/3 flex justify-start flex-col text-center">
          <h1 className="text-[25px] font-bold mx-8 mb-2 text-[#1c2a4e]">Improve your front-end skills by building projects</h1>
          <p className="text-[15px] mx-16 text-[#7892a1]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}