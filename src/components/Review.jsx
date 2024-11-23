import Box from "./Box";

const Review = () => {
  const boxData = [
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/27cd/d3c3/f114cb2eaabf2ff817ffe896fa37eb36?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8OqY6uBbEkntbW4Kxwe4P-tb7-O2-O7ctV3VpmOeEVOPF9SDrxutioIfkv7~qER8AdYzVbCOqyLPUcviBHSNxLD0M5Ef~4V4dJ0vOvLGhzYqt-XGm7qYB7hAiNl6Uk6orS65IZTm6ZLB0OKnSYrFnV-kEaroaTIIBWcWBwLPk5e0SYbsnlzyDQRuXptIdgkF9PNsJrZHVexO9aqt1g6UGUOAB2q47n4VsBq1r2gGQWaKgkvIiswsGoX7YwJVnu1Byxgl0xGg6jRJUGQ1N0AqWgOBr7XXhNuY4f9FvVhj0wqFTkV-Ho6dw586GzNCF3cBizCNgMeBnUYiDhNxcr7Ag__",
      title: "Patience Amem",
      subtitle: "Parent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
      bgColor: "bg-blue-500",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/27cd/d3c3/f114cb2eaabf2ff817ffe896fa37eb36?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8OqY6uBbEkntbW4Kxwe4P-tb7-O2-O7ctV3VpmOeEVOPF9SDrxutioIfkv7~qER8AdYzVbCOqyLPUcviBHSNxLD0M5Ef~4V4dJ0vOvLGhzYqt-XGm7qYB7hAiNl6Uk6orS65IZTm6ZLB0OKnSYrFnV-kEaroaTIIBWcWBwLPk5e0SYbsnlzyDQRuXptIdgkF9PNsJrZHVexO9aqt1g6UGUOAB2q47n4VsBq1r2gGQWaKgkvIiswsGoX7YwJVnu1Byxgl0xGg6jRJUGQ1N0AqWgOBr7XXhNuY4f9FvVhj0wqFTkV-Ho6dw586GzNCF3cBizCNgMeBnUYiDhNxcr7Ag__",
      title: "Mark James",
      subtitle: "Teacher",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
      bgColor: "bg-green-500",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/27cd/d3c3/f114cb2eaabf2ff817ffe896fa37eb36?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8OqY6uBbEkntbW4Kxwe4P-tb7-O2-O7ctV3VpmOeEVOPF9SDrxutioIfkv7~qER8AdYzVbCOqyLPUcviBHSNxLD0M5Ef~4V4dJ0vOvLGhzYqt-XGm7qYB7hAiNl6Uk6orS65IZTm6ZLB0OKnSYrFnV-kEaroaTIIBWcWBwLPk5e0SYbsnlzyDQRuXptIdgkF9PNsJrZHVexO9aqt1g6UGUOAB2q47n4VsBq1r2gGQWaKgkvIiswsGoX7YwJVnu1Byxgl0xGg6jRJUGQ1N0AqWgOBr7XXhNuY4f9FvVhj0wqFTkV-Ho6dw586GzNCF3cBizCNgMeBnUYiDhNxcr7Ag__",
      title: "John Igwe",
      subtitle: "Worker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Reviews
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Hear from real users and see how Ufuon is transforming their
            experience with powerful, interactive tools.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {boxData.map((box, index) => (
            <Box
              key={index}
              imgUrl={box.imgUrl}
              title={box.title}
              subtitle={box.subtitle}
              description={box.description}
              bgColor={box.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
