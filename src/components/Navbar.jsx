import btn from "../assets/images/Sign Up button@2x.svg";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Navbar = () => {
  const data = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f7fa/82d8/7eb1c7a7ce84e4d66e935d07e63a6440?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c0wjiTHTOYOw~m0tfoeX81T3QWSSBxZH0DgsgYbxFYuX2Gk1nATgLzW3lxw3vZTfzgT3cM3EgPscYczOnIAe9vi0cUhibCUnC4~uFgO-vU66vAariJtgrfHl-jU7hHwM1JQ-LN8bPJKZ6DVU3aQ8EfYZHke0rYUth1jpYmy1qeGQVMkIUujqytXzrHPQ1BLxmEh7FjecvR12lLT4BQ4UFVRbAqNpDqmzIC-d9bmpjBY8tyc7Z0DMH5Nryzve89uh9Yig0p4H~Wqgjg5V78CsbIrHhjcogksXCYEFYbztJOxNS3wobbwjxzHwL4~rfsgkWzIr89EdzrE-2D1sDGrfAQ__",
      title: "Capacitive Circuit",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/c85a/710f/0dec18989dfa6f610001d56bceb5d568?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6h2ui7SjeBbmpwcwr6pycTUZzYkQk6QvmhxUfOeWFkVEdnV9Vt6TbkrVeiK0YcCZs~tCBGeTbC81wvWV7M-npr6Na-XxTrbO3xXoR6kHmMcsAiXJEQgTCSX1G5bO7AJXVj6VH86xkNXEfkxrUubq90~D5AXzBvKJBwLYZncFzuh3O9aD5FDJrysJmMXMsbOB6U9aGVnVSmxQnKXS8oLCSQbsMB8AyB3DrRMmMWtk~cAPr5g4JajMjdKilHzRE61tGhmzx6q7achWl~g8geX9Aq5lua728tw491LpbSq7~ezNH-TDj96vo904xf9r00ha0PAsW~VZw~TkjinwJpstQ__",
      title: "Microcontroller Project",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/0ba3/099a/0c7c5fa08458879f9ff74b86a3e01ba7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdkbgN0dYdjfElSffQttZRNBB-mM8sUx8i9yZWkacF6WdJMgayAuxuIh2bp9OfF5sITOasHkujmtKuCvteLfsQJrTzzLuh9qBz4VlbBrQJgTEOuxDuprXhtQcG~dc9TWYoww0tdsSEZFJuafVNPdTalFAIYeO7G71d44-e1rJWvqK~CnNy5KOOllOmOzon-SU8Oxq0LH5jj0bJtEhtPiAfqzKLL2pIpcat3A~pR24Ay23NNUKUtXmg9vN~B7FAmJSPc-Ld0H9jDxEJuumzTsmidI69DCjGzY11zj9AF2L3NLEfhqAqIJ3Z8xjusdnTmEGSxGHWrxO3y-99KgEcXz8Q__",
      title: "Robotics Project",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/0ba3/099a/0c7c5fa08458879f9ff74b86a3e01ba7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdkbgN0dYdjfElSffQttZRNBB-mM8sUx8i9yZWkacF6WdJMgayAuxuIh2bp9OfF5sITOasHkujmtKuCvteLfsQJrTzzLuh9qBz4VlbBrQJgTEOuxDuprXhtQcG~dc9TWYoww0tdsSEZFJuafVNPdTalFAIYeO7G71d44-e1rJWvqK~CnNy5KOOllOmOzon-SU8Oxq0LH5jj0bJtEhtPiAfqzKLL2pIpcat3A~pR24Ay23NNUKUtXmg9vN~B7FAmJSPc-Ld0H9jDxEJuumzTsmidI69DCjGzY11zj9AF2L3NLEfhqAqIJ3Z8xjusdnTmEGSxGHWrxO3y-99KgEcXz8Q__",
      title: "Robotics Project",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/0ba3/099a/0c7c5fa08458879f9ff74b86a3e01ba7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdkbgN0dYdjfElSffQttZRNBB-mM8sUx8i9yZWkacF6WdJMgayAuxuIh2bp9OfF5sITOasHkujmtKuCvteLfsQJrTzzLuh9qBz4VlbBrQJgTEOuxDuprXhtQcG~dc9TWYoww0tdsSEZFJuafVNPdTalFAIYeO7G71d44-e1rJWvqK~CnNy5KOOllOmOzon-SU8Oxq0LH5jj0bJtEhtPiAfqzKLL2pIpcat3A~pR24Ay23NNUKUtXmg9vN~B7FAmJSPc-Ld0H9jDxEJuumzTsmidI69DCjGzY11zj9AF2L3NLEfhqAqIJ3Z8xjusdnTmEGSxGHWrxO3y-99KgEcXz8Q__",
      title: "Robotics Project",
    },
  ];

  return (
    <nav className="bg-custom-gradient flex items-center w-full overflow-hidden justify-between p-6">
      <h3 className="text-white text-[49.04px] font-bold leading-[46.71px] text-left font-visby">
        Ufuon <br /> school
      </h3>

      <div className="w-full h-28 [&_.slick-slider]:h-28 max-w-6xl">
        <Slider {...settings}>
          {data.map((ele, index) => (
            <div
              key={index}
              className="relative w-full h-28 flex-shrink-0 rounded-md shadow-md"
            >
              <img
                src={ele.image}
                alt={ele.title}
                className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black/60 px-2 py-1 rounded-md text-sm font-semibold">
                {ele.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-20">
        <img src={btn} alt="join" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
