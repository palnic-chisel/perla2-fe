import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
} from '@/app/components/Social/mock';

export default function Social() {
  return (
    <div className="shadow-md flex justify-around p-2 shadow-md bg-[#FFA384] gap-[0.5rem] w-full rounded-tl-[1.25rem] rounded-tr-[1rem] rounded-br-[1.25rem] rounded-bl-[0.625rem] sm:flex-col sm:h-[15rem] ">
      <a href={INSTAGRAM_LINK}>
        <FaInstagram
          className="cursor-pointer w-[1.875rem] h-[1.875rem]"
          color="white"
        />
      </a>

      <a href={WHATSAPP_LINK}>
        <FaWhatsapp
          className="cursor-pointer w-[1.875rem] h-[1.875rem]"
          color="white"
        />
      </a>

      <a href={FACEBOOK_LINK}>
        <FaFacebook
          className="cursor-pointer w-[1.875rem] h-[1.875rem]"
          color="white"
        />
      </a>

      <a href={LINKEDIN_LINK}>
        <FaLinkedinIn
          className="cursor-pointer w-[1.875rem] h-[1.875rem]"
          color="white"
        />
      </a>
    </div>
  );
}
