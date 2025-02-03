import { Link } from "react-router-dom"; // Import if using React Router

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <div className="w-full bg-[#005cb3]">
      <div className="flex flex-col md:flex-row items-start justify-between p-10 md:p-20">
        <div className="text-left mb-8 md:mb-0 md:w-1/3">
          <h1 className="font-[Visby Round CF] text-[32px] md:text-[59.03px] font-bold leading-[1.2] text-[rgba(252,186,4,1)]">
            Ufuon
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:gap-10 items-start mb-8 md:mb-0 md:w-1/3">
          {/* Quick Links Section */}
          <div>
            <ul className="space-y-4 text-white">
              <li className="font-medium text-[16px] md:text-[18px]">
                Quick Links
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store" className="hover:underline">
                  Ufuon store
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
                <Link to="/blog" className="hover:underline">
                  Blog Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="mt-4 ml-24 md:mt-0">
            <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px] mb-2">
              Follow Us
            </h3>
            <ul className="space-y-4 text-white">
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

        {/* Contact Info Section */}
        <div className="text-left md:w-1/3">
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
            59C Old Aba Road, Rumuobiakani,
            <br /> Port Harcourt, Rivers State, Nigeria.
          </p>
        </div>
      </div>

      <hr className="border-t border-white opacity-30 my-5" />

      <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
        <div className="text-white text-left">
          <p className="text-[12px] md:text-[14px] text-center md:text-left">
            codepally©️2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
