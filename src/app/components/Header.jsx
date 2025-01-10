import Image from "next/image";
import { assets } from "../../../assests/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-center gap-2">
        H1! I'm Dawa Tamang{" "}
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          className="w-6"
        />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        FrontEnd Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Passionate about building interactive and responsive web applications to deliver seamless user experiences.
      </p>
      <div>
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow Icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
