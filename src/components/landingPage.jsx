import navIcon from "../assets/images/Vector (1).svg";

const LandingPage = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-5 h-[1036px] left-0 gap-0 opacity-">
      <div className="flex flex-col items-center w-[45%]">
        <img
          src="https://s3-alpha-sig.figma.com/img/8c9d/e10a/b22b7149dd471d4fb2a93830d882f5c6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9lSKDiZM35tIpBBssv-DiqsCp6YUJmSAxHxH4Gbhu-3Ozml56MC70Qg0oINCqj1EE6nJEfzs5DQqyPVxLwSRihe80wc-h1pAzSaiQysF4WiKawcwKXNhshSSTOHKHIk7OcF8q1D3niijxadl2EAGJZ3kIrM3q2hxW0wSXol4SOYYoYOBb5ijSSH7u0z4ZoFWdmzOPsc8Iv~kFrV7wgVe0X3MKvK08oapF3MCLbmm77EqUjWHkCc94u18SYPA33DJm839pBjXDR-AHuK3xky~jpTptF0DlPPW1e7GGeB1eJKXvqK6LoStL94F3wUCCgfy0e13bbLdu9C2DoSZ9cx6w__"
          alt="Landing"
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex flex-col items-center w-[45%]">
        <h3 className="text-[24px] mb-2 text-center">
          Get a qualified teacher for your Child
        </h3>
        <ul className="list-none p-0 mt-2">
          <li className="flex items-center text-[18px] mb-2 text-black">
            <img src={navIcon} alt="icon" className="w-[20px] h-[20px] mr-2" />
            Teaching and learning made easy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
