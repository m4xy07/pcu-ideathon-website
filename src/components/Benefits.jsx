import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import DynamicCardsVariant2 from "./ui/LiveCards";
import { MeteorsDemo } from "./ui/meteorcard1";
import { MeteorsDemo2 } from "./ui/meteorcard2";
import { MeteorsDemo3 } from "./ui/meteorcard3";
import { MeteorsDemo4 } from "./ui/meteorcard4";
import { MeteorsDemo5 } from "./ui/meteorcard5";
import { MeteorsDemo6 } from "./ui/meteorcard6";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl lg:mb-10"
          title={
            <>
              Empowering <span className="text-color-2">Change</span> with <span className="text-color-1">Innovation</span> and <span className="text-color-3">Purpose</span>
            </>
          }
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <MeteorsDemo/>
          <MeteorsDemo2/>
          <MeteorsDemo3/>
          <MeteorsDemo4/>
          <MeteorsDemo5/>
          <MeteorsDemo6/>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
