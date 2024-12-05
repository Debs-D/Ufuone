const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-[1440px] mx-auto px-6 space-y-4 md:space-y-0">
        {/* Image Section */}
        <div className="w-full h-[400px] md:w-[662.5px] md:h-[794px] flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/4488/f0e5/e96b6ced2ac9ec030d0540019fa50369?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W49rQauowCOaeAsTFsHoSy-UPpHElaXTGUbhN-meybumrjQJ94oMminP15khkbAmbH2jZfLjHlarW5eJMUVY6Lv-mo6SYjzgFe4ifnYavENnxvj0vPcBakQav774cDq~Vgn7efGk4eY-s2UlW-qNi2Kd9vEmpBeYkLHGt3j9Wp2si6cP~GMU1zhVdORc-nq8oFUxGuOErHQwdMt74LHyXaRvh4M0hUqjjIC4SDLQRRHevbyD13p-DzX9rkeVXfuI7I8DUhYYeydz8XuBcWaUVeZDHfmaP6gXWmDTg4Tr51KYA7F3YSVgsqThO0NSzIJrdJJK7Vzenhh2t5lE-rNCkA__"
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4">
          <h3 className="font-outfit text-[32px] md:text-[54px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left">
            Fun and Learning with Ufuon at Home{" "}
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            Fun, engaging, and educational tools for learning and family bonding
            at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
