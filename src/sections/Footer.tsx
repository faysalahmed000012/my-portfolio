import gitHub from "@/assets/images/github.svg";
import instagram from "@/assets/images/linkedIn.svg";
import twitter from "@/assets/images/twitter.svg";
import Image from "next/image";

const Footer = () => {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  return (
    <section
      className="max-w-7xl mx-auto c-space pt-7 pb-3 border-t border-[#1c1c21]
        flex justify-between items-center flex-wrap gap-5"
    >
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/faysalahmed000012"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <Image src={gitHub} alt="github" className="w-1/2 h-1/2" />
          </div>
        </a>

        <a
          href="http://x.com/FaysalA58248829"
          target="_blank"
          className="inline-block"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <Image src={twitter} alt="twitter" className="w-1/2 h-1/2" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/misbahul-haq12/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <Image src={instagram} alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </a>
      </div>
      <p className="text-white-500">
        ©️ {fullYear} Misbahul Haq. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
