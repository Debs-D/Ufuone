const Footer = () => {
  const images = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/d3f3/fa4a/81a3fa7616efe791c18b5631ad9c5181?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cfqPmafaz0FWGkGcuMjjkJuTNxewqIwTFg5D-Fk7YCxKsh6CYExGHqHZw0A0gttQ1DYTLS2WWSCiNQshcAS26Lk1dx~Vz8af18uOakj8or88JrG0gDxuoYCLvc6fpB-14dCkk6KqvUbBsYQZftClUolc7jmgQVGRrOI4fR2bor6FdBg9I-dwu-9D2dR6hW6uDdwMXA8ziabMeQy5HoLhOnC3ueiIUdifx25icNp50e9~gA1NsWSo6Tq83zFUynSIoAw4H2ZXIep-pWN1DntKxlNgvocLUTFynIvFE-cFF3k4y7nri7e6oXGCY1hiBcCvqtP8kIISAvjsYKSa5RD2Tg__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/b609/07ee/817c63d263240d9e15ad0da0e822edb8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NkrRELpILin6bHRBYWLxMvkYHpj83tVeygcA0365a1ZRGNl~vnu97uGQ5VhUvvmwt~aVSqWkz7V-KcrW-j8Ue7vf8CWxKRCs~S2FBr-4KmXnP7cNwR4U~ZRHT23RMJNJhFFkbc1oZjufqA~8M-vYoPcCEJm6G1Y6svrtn2l6MfVjJ1vMgXBvzaH1kOoapU1x9zkxiFa~DCWBqSV3v89q1R0iZvn7dD46cHIUnOILRAWapnpe2zFGL-11X-icvsh6oPdS4GPPWsFPYdIi0HwLVvPSNTkn38LdNbaxfRKwy~keJ5UTbXqEBQQzSWpuZI33oMtZsSIb~McqaYms7Ecteg__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/e54c/d6ce/8f1e5b93d5a18c05026b42aedcd06e2c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N9-vXbZmaC47Tnd37fAiFyVuntkR8ZonMUVdJSQhgW7nnGge9bGPSQwFp737pXVEk0LCdYM6jVBub9VFEtUt~Yr3VLtFFLTynSX3zVRMmnGJHkyLK31fiImfKssVa3qeFQalfwY8Ok9KEdjJUVrnJ7UdQNOr3Lu0qSNoXlb6AbZtVO5OTGOA4VT0-Vcz0DxsaIWd6eY4K8YMZkUSzyGb0no5c-jO7y4TNwHxUPjhNdR1-vmMuDA6he~Xvs2y~80ndHn-e5ZS4YDHur-q5qdSi4aXnRbdNj7-ro45hbSvhnTKFc0k9PI4vgUet3nNj~t0WReN3q4izqu16wHBSvUIfw__",
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
            <li>Home</li>
            <li>Ufuon store</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Page</li>
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
