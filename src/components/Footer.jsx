import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img src={logo} alt="logo_img" className="w-[266px] h-[72px] object-contain"/>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className={`flex-[1.5] flex flex-wrap justify-between flex-row w-full md:mt-0 mt-10`}>
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-popins font-medium text-white text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            {footerlink.links.map ((link, index) => (
              <ul key={link.name} className="list-none mt-4">
                <li className={`font-popins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index === footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                  {link.name}
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
    <div className={`flex justify-between items-center md:flex-row flex-col pt-6 w-full border-t-[1px] border-t-[#3F3E45]`}>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((socialMediaIcon, index) => (
            <img key={socialMediaIcon.id} src={socialMediaIcon.icon} alt={socialMediaIcon.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`} onClick={() => window.open(socialMediaIcon.link)} />
        ))}
      </div>
    </div>
  </section>
)


export default Footer