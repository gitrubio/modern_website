import { useInView } from "react-intersection-observer";
import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}  ref={ref}>
    {stats.map((stat, index) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className={`w-[${index === 1 ? '100px' : '140px'}] font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white`}>
          {inView ? <CountUp  start={0} end={stat.value} duration={2}/> : null}
          {stat.type}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-2 ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);}

export default Stats;
