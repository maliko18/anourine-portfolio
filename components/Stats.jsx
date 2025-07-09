"use client";
import { Item } from "@radix-ui/react-select";
import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto xl:flex xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-2 items-center justify-center xl:flex-row xl:gap-4 xl:justify-start xl:flex-1"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-center xl:text-left`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
