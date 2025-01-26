import logo from "../assets/images/Logo (1).svg";

const UnfoneAboutSch = () => {
  return (
    <>
      <div className="text-center mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 m-auto md:w-auto md:h-full"
        />{" "}
        <p className="p-7 text-2xl text-center font-semibold text-gray-700">
          The inspired act of venturing beyond conventional ways of learning.
        </p>
      </div>

      {/* Two Boxes */}
      <div className="flex flex-col gap-8 mt-12 mb-12 justify-center items-center md:flex-row md:gap-12">
        <div className="flex items-center p-6 rounded-lg md:w-1/2">
          {/* First Box */}
          <div className="flex items-center p-7 ml-6 bg-gray-100 shadow-md rounded-lg w-full">
            <img
              src="data:image/png;base64,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"
              alt="Vision"
              className="w-16 h-16 mr-4 "
            />
            <div>
              <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
              <p className="text-gray-600 text-base">
                To provide alternative learning & teaching methods to enable the
                youth towards employability.
              </p>
            </div>
          </div>

          {/* Second Box */}
          <div>
            <div className="flex items-center p-7 ml-14 bg-gray-100 shadow-md rounded-lg w-full">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAADECAMAAAAVpGUgAAACf1BMVEUAAAAA4P/////v/v/////K+f8j5f/////////+//8C4P927/9R6/8a5P+9+P////9x7/////////////////9Q5f+09/9O6//////9///////+//////////////+N8f8c4/+B8f/7//9X5//////p/P+89P+z9v9s7v8O4//T+v866f/O+f9X7f+D7v/F+P/C9v/n/f/Z+/+39/8c5f////+Y8/977/+m9f9G6f8y5v8N4v+n9f8b5P+J8f////8y5f8r5v9y7f/E+f+x9v+h9P+P8v9b7P8/6f8e5P/2/v/D+P+H8f9Q6v9F6f8s5v/r/f+f9P+J8f9x7f9W7P987/+n9v8d5P9A6v/K+f977//x/v8N4f8D4f9W6/825v/m/P/G+P9g7P+F8P9l7P/v/f+v9f9v7f/d+//M+f8D3/////8I4v8V4/8R4/8D4f8o5v+J8f866P8/6P9W6/9E6f815/9x7v9p7f8e5P9J6f8a5P9f7P978P9N6v+O8v+X8//l/P9b6/+c9P8x5/+l9f9k7f+q9f+g9P8t5v+z9v/U+v+T8v9S6v/i/P/P+v/F+P/9///X+v+49/+E8P8M4v8N4v+89/8k5f/B9/+u9f+39v9t7f/0/v937/8f5f/d/P8s5v/5/v+h9P+A8P/O+v9O6v9D6f/q/P845//b+/+r9f+S8v+F8f/8///B+P998P9b7P8s5f8j5P/w/v/Z+v9u7v/r/f8y5/9m7f+v9v9l7f+B8P+A7//K+P9t7v/5///D+P8V5P/L+f937v/y/v9a7P9y7//G+f9S6/+V8/9I6v8H4v/m/f927v826P+K8v8M4/9g7f+U8//Z/P+7NiznAAAAa3RSTlMAQH/+IP7+H98QYP7+/v6//u+Pz0AQ/v6fbzA/7nBgHx/+TyCvICAQ37uTi29vQD8v79/f397az7+/pIB/b2BfQDAv7+/v7+/v79/f39/f38eXj4+Hd29fV+/v7t/fz8+/v7++r5+fn39QUDDMaB4AAAk9SURBVHja7NvNaoRQDAXgEAJeV6J24fwu5h267gPl/fedqUNhSr0GLHhSzje4dHG4ODfmRiEiIiIiIiIi+iOtmTWPq7lfD/atef5MoFnnAeUmwIqHnFuBdfOgo8BS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"
                alt="Mission"
                className="w-16 h-16 mr-4 "
              />
              <div>
                <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
                <p className="text-gray-600 text-base">
                  To create a powerful online learning ecosystem for everyone,
                  tailored for each one.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnfoneAboutSch;
