const Gain = () => {
  return (
    <div className="flex justify-center items-center py-[95px] px-[261px]">
      {/* Box Container */}
      <div className="flex flex-col items-center justify-center text-black text-center bg-[rgba(217,217,217,0.26)] w-[1023px] py-12 px-16 gap-5 rounded-[20px]">
        <h2 className="text-6xl font-semibold mb-4">Gain Access</h2>

        <p className="text-xl mb-6 max-w-[820px] font-normal leading-relaxed">
          Gain access to our school management system
        </p>

        <button className="py-3 px-10 bg-[#fe0804] text-white rounded-lg text-xl font-medium hover:bg-[#e00703] hover:scale-105 transition-transform duration-300">
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default Gain;
