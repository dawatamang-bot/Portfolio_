import Image from "next/image"
import { assets } from "../../../assests/assets"

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
      <h3>
        H1! I'm Dawa Tamang <Image src={assets.hand_icon} alt="" className="'w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        FrontEnd Web Developer
      </h1>
      <p className="mzx-w-2xl mx-auto font-Ovo">
        Description
      </p>
      <div>
        <a href="">Contact <Image src={assets.right_arrow_white} alt="" className="rounded-full w-4" /></a>
      </div>
    </div>
  )
}
export default Header