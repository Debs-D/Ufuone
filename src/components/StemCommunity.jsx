const StemCommunity = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Image Box */}
      <div className="w-[550px]">
        <img
          src="https://images.ctfassets.net/pc40tpn1u6ef/32GkXpUpsiKkwghY4CABn3/3c6d87219217058b82f291c323d75f18/STEMCommunity-2024-2.png?w=640&q=75"
          alt="STEM Community"
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Text Box */}
      <div className="w-[550px] p-8">
        <h1 className="text-3xl font-extrabold mb-5 text-gray-900">
          STEM Community
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          STEM Community is a friendly, supportive network of more than 20,000
          teachers and technicians helping each other. Featuring exclusive
          events, subject-specific groups, lively debates, and topical news, you
          cant afford to miss out.
          <br />
          <br />
          It’s free to join and it uses the same login details as your STEM
          Learning website account if you already have one.
        </p>
        <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-md">
          Join the STEM Community
        </button>
      </div>
    </div>
  );
};

export default StemCommunity;
