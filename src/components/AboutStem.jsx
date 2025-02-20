const AboutStem = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 mb-10 ">
      {/* Top Row - Two Boxes */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-sm:w-full overflow-hidden">
        {/* First Box */}
        <div className="w-[550px] p-8 border rounded-xl shadow-xl bg-gray-100 max-sm:w-[350px] ">
          <p className="text-2xl text-gray-800 leading-relaxed max-sm:text-sm">
            “The STEM Learning CPD course was fantastic... informative and
            hands-on. I learned new methods of teaching and how accessible the
            science curriculum can be for SEND students. It was also a brilliant
            networking opportunity.”
            <br />
            <span className="text-lg font-semibold text-gray-600">
              — Tammy Calboutin, Science Teacher
            </span>
          </p>
        </div>

        {/* Second Box */}
        <div className="w-[550px] max-sm:px-28 mt-10">
          <h1 className="text-3xl font-extrabold mb-5 text-gray-900 max-sm:text-md max-sm:text-2xl">
            Our Vision is to Improve Lives Through STEM Education
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are dedicated to empowering young people with the skills and
            knowledge to thrive through effective teaching and learning.
          </p>
          <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-md">
            About STEM Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutStem;
