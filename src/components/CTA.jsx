import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} sm:text[26px] text-[20px] leading-[40px]`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[15px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="">
      <Button styles="mt-10 py-2 px4 sm:text-[20px] text-[12px] rounded-[6px]"/>
    </div>
  </section>
);

export default CTA;
