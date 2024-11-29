const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1440px] px-6 space-y-6 md:space-y-0">
        {/* Image Section (Mobile first) */}
        <div className="w-full h-[400px] md:w-[662.5px] md:h-[794px] flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/1dab/4b11/c1ed7785121b6aa885d763c0940f7bbf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtRVc7F9xqX3x5HowlAZWRXnELBW1GzExYLqM3r7wrtrbIJVH~puIKJLfxF~nHRq2IdUqAgJ5OOBCg8tFIwQomZfhn~qhfix7FfsaIfEEQp7Lu0hMie7ainOO-8JliMaq8auUObVY0ajojtnnyjTvW7tDKJkKUi76YGVvNDBgKFUSDqiCHavK9MSjLHr41y5Qw2sVRLYPYfLzYP78hJB7G49sIaR0YAfOLBdepWyxgjhZ7yTe~1fn4dOOU9eoBSef3DVVtSuTbDnU0LjocDsWLbEiPrleB~GWrOsrcbp10MSIvdOLRGCoI7ofIdNC0SK36UHFOJEYG~PEMVFbDOrwg__"
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4 -mt-20">
          <h3 className="font-outfit text-[32px] md:text-[54px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left">
            Ufuon School Management System
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            A cloud-based platform designed to support independent and
            international schools across Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
