const Footer = () => {
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

      {/* Footer Bottom Section */}
      <div className="flex justify-between p-5">
        {/* Social Media Section */}
        <div className="w-1/3 flex gap-4">
          {[...Array(3)].map((_, idx) => (
            <img
              key={idx}
              src="https://s3-alpha-sig.figma.com/img/843e/f6bc/f91775f57e608123655dd6ecb13bc8db?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7N6iBvB7HZQzXQNezNRl5NXJ0in2DtuOPheMGqCLwK~d~AQS6aIi-NtkR3tLusEJsqnwJAR5VzDfts9eL93xkU9Guo4gY3zyJg-WF3gaJV8LRIVCs4A4nCcnzCeHPzvI8Vyjh24AtR5uKInk0wR4uVEtyo~as3boWwqEQ1hXJCQAJTGbg-TMvt93d4cdnJtnx1~lqj-gTtfrQD27zWCtwMfRSYbPJG6a9CJ5CinO4HzmTbSJ7ZTNesE57Q7vLhwUE7mn8xdQY6i~FtnJMhKqV1vroswicFR4UBn~0msTRrq7CPmfpuywhaPrTL-u4-KFyuU~AgvG32Giz9S9vmlfg__"
              alt={`Image ${idx + 1}`}
              className="w-[22.88px] h-[23.2px] opacity-1"
            />
          ))}
        </div>

        {/* Footer Text Section */}
        <div className="w-1/3 text-white text-center">
          <p>codepally2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
