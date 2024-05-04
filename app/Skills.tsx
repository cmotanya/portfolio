import React from "react";
import { motion } from "framer-motion";

import Carousel from "./component/Carousel";
import ProfessionalSkills from "./component/ProfessionalSkills";
import ImageGrid from "./component/SkillsTabs";

export const runtime = "edge";

function Skills() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="skill" className="py-[3rem] text-neutral-300">
      <div className="mx-auto w-[--width]">
        <div className="text-pretty px-6">
          <h1 className="font-ubuntu py-3 text-center text-5xl uppercase md:pt-0">
            projects{" "}
          </h1>
        </div>

        <div className="font-quicksand flex basis-full flex-col justify-center space-y-6 text-lg">
          <div ref={scrollRef} className="text-pretty">
            <motion.div
              className="space-y-3 py-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1.5, type: "tween", bounce: 0 },
              }}
              viewport={{ root: scrollRef, once: true }}
            >
              <h2 className="text-balance text-xl font-semibold uppercase md:py-2">
                Building a freelance career with passion, commitment, and
                exceptional results
              </h2>
              <p>
                As a freelancer, I bring my expertise and dedication to every
                project, delivering outstanding work that exceeds client
                expectations. Passion is critical because freelancing can have
                its challenges. Having a genuine enthusiasm for my work helps me
                persist through any difficulties and continually strive to
                produce my best work. Hire me to infuse your project with ideas
                into reality.
              </p>
            </motion.div>
          </div>

          {/* Area chart describing comparison of businesses that have websites and those without */}
          <div>
            <h2 className="text-balance py-2 text-xl font-bold uppercase">
              Unlock your business for maximum visibility.
            </h2>
            <p className="md:pb-6">
              Businesses with websites enjoy up to 72% higher online discovery,
              88% more reviews, 78% more email inquiries, and 96% higher social
              media engagement compared to those without. Invest in a
              professional website today to unlock exponential growth
              opportunities
            </p>
          </div>

          {/* Skills tab with images describing the kind of work I do. */}
          <ImageGrid />

          {/* Carousel with clients providing feedback about my work. */}
          <Carousel />

          {/* My professional skills portfolio. */}
          <div>
            <h2 className="py-4 text-xl font-bold uppercase">
              Below are my skills:
            </h2>
            <ProfessionalSkills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
