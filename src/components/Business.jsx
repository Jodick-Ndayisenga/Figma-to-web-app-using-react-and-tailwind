import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const FeatureCard =({icon, title, content, index})=>(
  <div className={`flex flex-row sm:p-6 p-0 rounded-[20px] ${index !== features.length-1?'mb-6':'mb-0'} feature-card`}>
    <div className={`sm:w-[64px] w-[34px] h-[34px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className={`flex-1 flex flex-col ml-3`}>
      <h4
      className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
)
const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} sm:text-[30px] text-[23px] sm:leading[60px] leading-[50px]`}>
        You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles = "mt-10 py-2 px4 sm:text-[20px] text-[12px]"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index)=>(
        <FeatureCard key = {feature.id} {...feature} index = {index}/>
      ))}
    </div>
  </section>
);

export default Business;
