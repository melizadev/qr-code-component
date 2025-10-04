import QrCode from "../assets/image-qr-code.png";
const Qr = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-light-blue">
      <div className="bg-white p-4 rounded-xl flex flex-col items-center justfy-center gap-3     max-w-sm text-center ">
        <img src={QrCode} alt="" className="w-[260px] h-auto rounded-md" />
        <h2 className="font-bold font-outfit text-xl text-[#1f3251]">
          Improve your front-end <br /> skills by building projects{" "}
        </h2>
        <p className="text-[#7b879d] text-[15px] font-normal font-outfit pb-2  ">
          Scan the QR code to visit Frontend <br /> Mentor and take your coding
          skills to <br />
          the next level
        </p>
      </div>
    </div>
  );
};
export default Qr;
