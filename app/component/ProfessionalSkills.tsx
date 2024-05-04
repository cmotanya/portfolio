import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../utils/cn";

function ProfessionalSkills() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<string | null>(null);

  function toggleDrawer(skillName: string) {
    setIsDrawerOpen((prevDrawer) =>
      prevDrawer === skillName ? null : skillName,
    );
  }

  return (
    <div className="space-y-4">
      <SkillDrawer
        isOpen={isDrawerOpen === "Programming:"}
        toggleDrawer={toggleDrawer}
        skillName="Programming:"
      >
        <SkillItem
          text="HTML"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarHalfFilled />}
        />
        <SkillItem
          text="CSS"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarHalfFilled />}
        />
        <SkillItem
          text="JavaScript"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarHalfFilled />}
          icon5={<IconStar />}
        />
        <SkillItem
          text="AstroJS"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStar />}
          icon5={<IconStar />}
        />
        <SkillItem
          text="ReactJS"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStar />}
          icon5={<IconStar />}
        />
        <SkillItem
          text="NextJS"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStar />}
          icon5={<IconStar />}
        />
      </SkillDrawer>

      <SkillDrawer
        skillName="CCTV, Biometric and Access Controls:"
        isOpen={isDrawerOpen === "CCTV, Biometric and Access Controls:"}
        toggleDrawer={toggleDrawer}
      >
        <SkillItem
          text="Site Survey"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Installation"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Maintenance"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Remote View"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
      </SkillDrawer>

      <SkillDrawer
        skillName="Networking:"
        isOpen={isDrawerOpen === "Networking:"}
        toggleDrawer={toggleDrawer}
      >
        <SkillItem
          text="Basic Set-up"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Troubleshooting"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="IP Addressing"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Wireless Config"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
        <SkillItem
          text="Cabling"
          icon1={<IconStarFilled />}
          icon2={<IconStarFilled />}
          icon3={<IconStarFilled />}
          icon4={<IconStarFilled />}
          icon5={<IconStarFilled />}
        />
      </SkillDrawer>
    </div>
  );
}

function SkillDrawer({
  skillName,
  children,
  isOpen,
  toggleDrawer,
}: {
  skillName: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggleDrawer: (skillName: string) => void;
}) {
  return (
    <div className="space-y-1">
      <p className="uppercase">{skillName}</p>
      <button
        onClick={() => {
          toggleDrawer(skillName);
        }}
        className={cn(
          "rounded-full bg-slate-700/50 px-4 py-2 outline-none outline-offset-2 outline-gray-800 transition-all hover:bg-indigo-700/50 hover:text-slate-100 hover:outline-gray-700 active:bg-indigo-800",
          isOpen ? "bg-indigo-800/50" : "",
        )}
      >
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

      {isOpen && (
        <div className="group">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="grid grid-flow-row gap-4 pt-2 text-slate-300 group-hover:text-slate-500 md:grid-cols-2"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
}

function SkillItem({
  text,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}: {
  text: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
  icon4: React.ReactNode;
  icon5: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex gap-2 hover:text-slate-300">
      <span className="inline-block min-w-28">{text}</span>
      <span className="hover:text-slate-300">{icon1}</span>
      <span>{icon2}</span>
      <span>{icon3}</span>
      <span>{icon4}</span>
      <span>{icon5}</span>
    </div>
  );
}

export default ProfessionalSkills;
