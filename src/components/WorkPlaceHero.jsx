const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-[1440px] mx-auto px-6 space-y-4 md:space-y-0">
        {/* Image Section */}
        <div className="w-full h-[400px] md:w-[662.5px] md:h-[794px] flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e38/96f3/47ce21082b8ad90137f549bd8aa584b2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tty2tVHOYMBUZ3DGyUN8xBteGoLyJ0Yr8gi3J4fKWah11mJINtgoNZJj-URbSKt-akFb5XejdHMwuG1u5LBZu894mk4apH5AocdXT2LsVzotcRFyF~UA7WFBXBnNoqtWlEYJReXni5Di-QqkydPy~k3vAs9ofB8rrljw~KUgpzFGSqKHlqu1rgb5cBB4ds7iNbs6i0foDBYLRudYIkcHjJNFqKfVrDKkIsQsrjy0i6qBxcLXok1V8qnfCI7wKvpUiAGq7kSoAvG1vBB8W4QULTqd0d3huQvMi5TilXnb2RcRlmwENr97DD11Q3pXV6-vTs68Q50ks35MQ~ivDPQP9w__"
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4">
          <h3 className="font-outfit text-[32px] md:text-[54px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left">
            Ufuon for the Modern Workplace{" "}
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            Empower your workplace with dynamic tools for delivering training,
            presentations, meetings, and events in-person or virtually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
