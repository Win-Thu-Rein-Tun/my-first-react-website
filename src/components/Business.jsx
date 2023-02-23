import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex-row flex rounded-[24px] p-6 feature-card ${index !== features.length - 1 ? "mb-6" : "mb-0" }`}>
    <div className={`${styles.flexCenter} bg-dimBlue w-[64px] h-[64px] rounded-full `}>
      <img src={icon} alt="iconimage" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className={`flex-col flex flex-1 ml-3`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>You do the business,<br className="sm:block hidden" /> we’ll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
)


export default Business