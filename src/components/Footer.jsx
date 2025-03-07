import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/ufuon_edu/?hl=en" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Facebook", url: "https://www.facebook.com/Ufuon" },
    { name: "Twitter", url: "https://x.com/ufuon_edu" },
  ];

  return (
    <div className="w-full bg-[#005cb3]">
      <div className="flex flex-col md:flex-row items-start justify-between p-10 md:p-20 gap-10 md:gap-5">
        {/* Logo Section */}
        <div className="md:w-2/3 mr-20">
          <h1 className="font-[Visby Round CF] text-[32px] md:text-[59.03px] font-bold leading-[1.2] text-[rgba(252,186,4,1)]">
            Ufuon
          </h1>


            {/* Contact Info Section */}
        <div className="md:w-full">
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-2">
            Email
          </h3>
          <p className="text-white text-[14px] md:text-[16px] mb-4">
            hello.ufuon.com@gmail.com
          </p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-2">
            Phone
          </h3>
          <p className="text-white text-[14px] md:text-[16px] mb-4">
            +234 8139 582 152
          </p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-2">
            Address
          </h3>
          <p className="text-white text-[14px] md:text-[16px]">
          11 Barba Street, before Green care hospital, Ohakwe Junction (close to location, Ada George)


            <br />Rumuigbo, Port Harcourt, Rivers State, Nigeria.
          </p>
        </div>
        </div>


        <div className="md:w-1/3">
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-4">
           Services
          </h3>
          <ul className="space-y-3 text-white">
            <li>
              <Link to="/store" className="hover:underline">
                Ufuon Store
              </Link>
            </li>
            <li>
              <Link to="/store" className="hover:underline">
                Store
              </Link>
            </li>
            <li>
              <Link to="//ufoneAbout" className="hover:underline">
               School
              </Link>
            </li>
          </ul>
        </div>






        {/* Quick Links Section */}
        <div className="md:w-1/3">
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-white">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ufoneAbout" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactUfone" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
               <a href="https://blog.ufuon.com/" target="_blank">Blog Page</a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="md:w-1/3">
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-4">
            Follow Us
          </h3>
          <ul className="space-y-3 text-white">
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      
      



      </div>

      <hr className="border-t border-white opacity-30 my-5" />

      {/* Copyright Section */}
      <div className="flex flex-col md:flex-row p-5 md:p-10">
        <p className="text-white text-[12px] md:text-[14px] ">
          codepally©️2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
