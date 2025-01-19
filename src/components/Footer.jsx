import { Link } from "react-router-dom"; // Import if using React Router

const Footer = () => {
  const images = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/d3f3/fa4a/81a3fa7616efe791c18b5631ad9c5181?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPtcrrNtKtVx9M0dME9H8nYycdVIFfULy3y457kVDbmrr56-GRAq7YExrcvPmKVShIlxuQbrqRlHa0uEdp40n7nP1wLTAkFY2I1MaD5CDWH~KJIMg7w~3CffOKlIOecIZU1CtdyvuG4w4DPmUh9wBpAIcMKuXt-DorNCPiTVwqYLWHMBWpfp~za-DtLENzVwvp~~IAct9PNfwMt9ZGRzNv3u6~7dDMxuKck9muOK10AIzNfnq8fXN6p1ezSFjbewfXo7Xn9L6m1ZsukPRW8jSTWl8Yy6~02TA-bPEeirn5NtCb0ZYwQ3vVZ2dwMZeHTKyWl1lEI7H~rD4iQnGVVKqQ__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/e54c/d6ce/8f1e5b93d5a18c05026b42aedcd06e2c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LVnkyfHUjnnUtyNrhTWAVgEJihMhRrg7Qr-rcOfLSzrm4CckfgBNs2kYgoYkOPjfcWNo7gn3P7XDL~JXbFMmC8x1kMD~TFYUm4WIzGyuUBl9CykrrQ8LGS4O~1OUUQPmOUfocL8T-Sro0UjGSyt8kOX5OMeEgbZbCwyNDU2DOaJydgCnl6Mozsdj03aB2hp0NgqW67qqqWhlsCpP6SmwMy0OJJhhsXvnwA1ygSfSliRKhCokWVQ~Jt-oofV3sLOdyfhSPDhvUG69cYIjqa3QXM4mgK87hswct~x7nOWVWayt-diUTDLaTxQc3e2-6hzwW5LkPu~ik6VOm0smzKR3NA__",
    },
  ];

  return (
    <div className="w-full bg-[#005cb3]">
      <div className="flex flex-col md:flex-row items-start justify-between p-10 md:p-20">
        <div className="text-left mb-8 md:mb-0 md:w-1/3">
          <h1 className="font-[Visby Round CF] text-[32px] md:text-[59.03px] font-bold leading-[1.2] text-[rgba(252,186,4,1)]">
            Ufuon
          </h1>
        </div>

        <div className="text-left mb-8 md:mb-0 md:w-1/3">
          <ul className="space-y-2 text-white">
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

        <div className="text-left md:w-1/3">
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px]">
            Email
          </h3>
          <p className="text-white text-[14px] md:text-[16px] mb-4">
            hello.ufuon.com@gmail.com
          </p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px]">
            Phone
          </h3>
          <p className="text-white text-[14px] md:text-[16px] mb-4">
            +234 8139 582 152
          </p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold text-[16px] md:text-[18px]">
            Address
          </h3>
          <p className="text-white text-[14px] md:text-[16px]">
            59C Old Aba Road, Rumuobiakani,
            <br /> Port Harcourt, Rivers State, Nigeria.
          </p>
        </div>
      </div>

      <hr className="border-t border-white opacity-30 my-5" />

      <div className="flex flex-col md:flex-row items-start justify-between p-5">
        <div className="flex gap-4">
          {images.map((_, idx) => (
            <img
              key={idx}
              src={_.image}
              alt={`Image ${idx + 1}`}
              className="w-[20px] h-[20px]"
            />
          ))}
        </div>

        <div className="text-white text-left mt-4 md:mt-0">
          <p className="text-[12px] md:text-[14px]">codepally©️2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
