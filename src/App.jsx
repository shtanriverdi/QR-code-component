export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#d1d9e6]">
      <div className="mx-8 bg-[#ffffff] max-w-[360px] rounded-[20px]">
        <div className="m-4">
          <img
            className="rounded-[10px] object-contain"
            src="./qr.png"
            alt="QR Image"
          />
        </div>
        <div className="text-center">
          <h1 className="p-3xl:text-2xl p0-3xl:text-lg font-bold mx-10 mb-2 text-[#1c2a4e]">
            Improve your front-end skills by building projects
          </h1>
          <p className="p-xs:text-md p0-xs:text-xs mx-14 mb-8 text-[#7892a1]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
