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
    {
      image:
        "https://s3-alpha-sig.figma.com/img/843e/f6bc/f91775f57e608123655dd6ecb13bc8db?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7N6iBvB7HZQzXQNezNRl5NXJ0in2DtuOPheMGqCLwK~d~AQS6aIi-NtkR3tLusEJsqnwJAR5VzDfts9eL93xkU9Guo4gY3zyJg-WF3gaJV8LRIVCs4A4nCcnzCeHPzvI8Vyjh24AtR5uKInk0wR4uVEtyo~as3boWwqEQ1hXJCQAJTGbg-TMvt93d4cdnJtnx1~lqj-gTtfrQD27zWCtwMfRSYbPJG6a9CJ5CinO4HzmTbSJ7ZTNesE57Q7vLhwUE7mn8xdQY6i~FtnJMhKqV1vroswicFR4UBn~0msTRrq7CPmfpuywhaPrTL-u4-KFyuU~AgvG32Giz9S9vmlfg__",
    },
  ];

  return (
    <div className="w-full bg-[#005cb3]">
      <div className="flex justify-between p-20">
        <div className="w-1/3">
          <h1 className="font-[Visby Round CF] text-[59.03px] font-bold leading-[70.84px] text-left text-[rgba(252,186,4,1)]">
            Ufuon
          </h1>
        </div>

        <div className="w-1/3">
          <ul className="space-y-2 text-white">
            <li className="font-medium">Quick Links</li>
            <li>Home</li>
            <li>Ufuon store</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Page</li>
          </ul>
        </div>

        <div className="w-1/3">
          <h3 className="text-[rgba(252,186,4,1)] font-bold">Email</h3>
          <p className="text-white mb-4">hello.ufuon.com@gmail.com</p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold">Phone</h3>
          <p className="text-white mb-4">+234 8139 582 152</p>
          <h3 className="text-[rgba(252,186,4,1)] font-bold">Address</h3>
          <p className="text-white">
            59C Old Aba Road, Rumuobiakani,<br></br> Port Harcourt, Rivers
            State, Nigeria.
          </p>
        </div>
      </div>

      <hr className="border-t border-white opacity-30 my-5" />

      <div className="flex justify-between p-5">
        <div className="w-1/3 flex gap-4">
          {images.map((_, idx) => (
            <img
              key={idx}
              src={_.image}
              alt={`Image ${idx + 1}`}
              className="w-[22.88px] h-[23.2px]"
            />
          ))}
        </div>

        <div className="w-1/3 text-white text-center">
          <p>codepally2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
