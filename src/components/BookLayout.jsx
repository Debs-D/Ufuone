import navIcon from "../assets/images/Vector (1).svg";

const BookLayout = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full py-10 px-5 bg-[#005cb3] gap-5 relative">
      <div className="flex flex-col items-start gap-5 max-w-[600px]">
        <h1 className="text-white text-[69.47px] font-medium leading-[87.53px] font-outfit text-left">
          Educative Books For Your Kid
        </h1>
        <ul className="flex flex-col gap-4 p-0 list-none">
          <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
            <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
            Access books and comics
          </li>
          <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
            <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
            Fun quizzes and material by teachers
          </li>
          <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
            <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
            School Assessment made easy.
          </li>
        </ul>
      </div>

      <img
        src="https://s3-alpha-sig.figma.com/img/8c9d/e10a/b22b7149dd471d4fb2a93830d882f5c6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4fh4bdvhWDhnSsHYf0k5n3D56OW54qR2BmZe3gwOs~QiLy6Jl~tz4lZxsOBuujmrHTfGfDBw1kVjfjfxfA70MM3XZ8yOKHsRSTcxtQ5dKs0aB5sNvOOX2Z3FPaAO9Wh~~iX1NkUJ43WD8Q0s4J9VSp-PgJrHK7fAie6wo-VSx9SQ-czSPYMwXJvuR8si7rPOkOSmGpSdMd1XcV4FkfD9ohOw7rGjl~GyONI4BkUnyPOSIUaA48zN~z4a0CRcOD0Gn0Kii6PImqtcY9WAZLP4UTeBuWevo02dk5eu4TLXOryHknvNwiXRbFvk6oU1avqKFk~bXP6lmsAqL3Fd-dUqQ__"
        alt="Main Visual"
        className="md:h-[701px]"
      />
    </div>
  );
};

export default BookLayout;
