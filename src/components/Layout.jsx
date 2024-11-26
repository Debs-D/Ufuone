import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const Layout = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-wrap items-center justify-evenly w-full h-auto  bg-white gap-5">
        <img src={img} alt="images" className="md:h-[701px]" />

        <div className="flex flex-col items-start gap-5 max-w-[600px]">
          <h1 className="w-[559px] text-6xl font-medium leading-[87.53px] font-sans text-red-600 text-left">
            Get a qualified teacher for your Child
          </h1>

          <ul className="flex flex-col gap-4 p-0 list-none">
            <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Teaching and learning made easy.
            </li>
            <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Socialize your study
            </li>
            <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Quiz Presentation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
