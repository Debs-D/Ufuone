import Slider from "react-slick";
import Box from "./Boxer";

const Review = () => {
  const boxData = [
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/27cd/d3c3/f114cb2eaabf2ff817ffe896fa37eb36?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdOhHp95MwpUntKjOW8pD6I3FaiXHQupHXBJ3mXgoPj1D4IDW6zuYfDXNCvojaOrClddL~nfB3wOmybjf5Z~RUMu6ee0ZWA54ptCgFddfUvaJoG6g-hzjZvZkjQ7tv-CVWzPPpdBESrhwzK4jfwD9~P3uHqp2t6MZf1zy8XMbp1dXIBQpQ3LUxSdMNWsZCYhhU5VofeA2gOeINec4lFvVIf0KPn-8xfpv6wd1NzvfIK8hS~cOL6IbdPD5R02OQo71bTtIic6Q52-woqo6~HGITlww8yaqec29ui2EfyflSMiL~zRJ-YVTUAwl6XcrsjosVJDX7Js4JkDIUZavbttLQ__",
      title: "Patience Amem",
      subtitle: "Parent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/6a6a/a706/b47e46ffcc525c0f7b1f62e0cf4e20d6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDyVgQU3PrKDU8YxSBKXoRnrh2Be6rJ9GLrKLyVGPp3nbrY9hPhgj3SVG7NerYp4sSL72q7BxGOLN0sFRvW6tbdJKEJ570TGB9slw834QUk5zST5DkMZC6sw6pdOfta6ak85-cp2Q74LhxTTBa4Ai1TQ5-Mm8eMDekgaahBma5nBS2RbxXehLuUp4qUhTYC1~FB2gXVx-H5kI6TukGxTdnoQEdxsWQkSs5XCZ3WT8ntr5oxVaRN5HPJWypMdopJuHKdi8EkalOyNIKkO7wsJis4gmH50TJr5HtMvPw8q4W8aY1sry5V-yJ2-79LBO87tsWaoHBJwBKTiWNqTxfT~IQ__",
      title: "Mark James",
      subtitle: "Teacher",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
    {
      imgUrl:
        "https://s3-alpha-sig.figma.com/img/d817/537c/7703570ef684b18c65535188d9169288?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Li7Ikx~XpJo2eq697tGhNamwqVhncixLCjRkys5yuw~F4t2RJ55QH6zSLcqCij7~k0cMF8sHLDBecmfx5ufHc5PT-mRMakrlTQaU197UmyFL9Iv-VB3dq5ncnAnm8cvoHiUB7cPDdSeDibgd1ITsVodH-ENvujDg8YTVcwH2T8zjsQYGBq8O0fWnHUQa0S~6D3TpGIyteJRkj8HxFkO6xZRiM3rehGLiLsl0adOoGcK5unZ2HCDtcQERHIpIQJe-3c1BBaxtuwkYDuLiQWQVsXoWuAMc8d2CN4Ez3Wf2KKlNIEhZKs7n6fcdOLKyQjFT1ldK4YjfapOQcCQsZt~26A__",
      title: "John Igwe",
      subtitle: "Worker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
  ];

  // Settings for the responsive slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mt-10 sm:mt-16 sm:pt-16">
          {boxData.map((box, index) => (
            <Box
              key={index}
              imgUrl={box.imgUrl}
              title={box.title}
              subtitle={box.subtitle}
              description={box.description}
            />
          ))}
        </div>

        <div className="lg:hidden mx-auto mt-10 max-w-2xl">
          <Slider {...sliderSettings}>
            {boxData.map((box, index) => (
              <Box
                key={index}
                imgUrl={box.imgUrl}
                title={box.title}
                subtitle={box.subtitle}
                description={box.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
