import navIcon from "../assets/images/Vector (1).svg";
import downloadIcon from "../assets/images/Component 2.svg";

const Layout = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full h-auto p-10 bg-white gap-5">
      <img
        src="https://s3-alpha-sig.figma.com/img/8c9d/e10a/b22b7149dd471d4fb2a93830d882f5c6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4fh4bdvhWDhnSsHYf0k5n3D56OW54qR2BmZe3gwOs~QiLy6Jl~tz4lZxsOBuujmrHTfGfDBw1kVjfjfxfA70MM3XZ8yOKHsRSTcxtQ5dKs0aB5sNvOOX2Z3FPaAO9Wh~~iX1NkUJ43WD8Q0s4J9VSp-PgJrHK7fAie6wo-VSx9SQ-czSPYMwXJvuR8si7rPOkOSmGpSdMd1XcV4FkfD9ohOw7rGjl~GyONI4BkUnyPOSIUaA48zN~z4a0CRcOD0Gn0Kii6PImqtcY9WAZLP4UTeBuWevo02dk5eu4TLXOryHknvNwiXRbFvk6oU1avqKFk~bXP6lmsAqL3Fd-dUqQ__"
        alt="images"
        className="md:h-[701px]"
      />

      <div className="flex flex-col items-start gap-5 max-w-[600px]">
        <h1 className="w-[559px] text-6xl font-medium leading-[87.53px] font-sans text-red-600 text-left">
          Get a qualified teacher for your Child
        </h1>
        <ul className="flex flex-col gap-4 p-0 list-none">
          <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
            <img
              src={navIcon}
              alt="icon"
              className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
            />
            Teaching and learning made easy.
          </li>
          <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
            <img
              src={navIcon}
              alt="icon"
              className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
            />
            Socialize your study
          </li>
          <li className="flex items-center font-sans text-3xl font-medium leading-[53.2px] text-left">
            <img
              src={navIcon}
              alt="icon"
              className="w-10 h-10 filter brightness-0 saturate-100 mr-2.5"
            />
            Quiz Presentation
          </li>
        </ul>
      </div>

      <img
        src={downloadIcon}
        alt="Download Icon"
        className="absolute right-5 bottom-2.5 w-[206px] h-[60px]"
      />
    </div>
  );
};

export default Layout;
