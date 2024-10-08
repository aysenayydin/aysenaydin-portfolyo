import React from "react";
import Title from "./Title";
import { skillsLeft } from "../content/data";
import { skillsRight } from "../content/data";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function SkillList() {
  const { texts } = useLanguageTheme();

  return (
    <div className="flex sm:gap-8 lg:gap-36 mt-[84px] mb-[96px] justify-center w-full">
      <Title text={texts.skillsSection.heading} textSize={"text-5xl"} color={"text-light-purple dark:text-light-green"} />

      <div className="flex justify-center sm:gap-5 lg:gap-36 ">
        <div className="flex gap-9 flex-col">
          {skillsLeft.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-2xl text-light-gray font-semibold"
            >
              <img
                className={`sm:w-16 sm:h-16 lg:w-32 lg:h-32 rounded-md ${
                  skill.backgroundColor ? skill.backgroundColor : ""
                }`}
                src={skill.icon}
                alt={skill.title}
              />
              <div className="dark:text-white">{skill.title}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-9 flex-col">
          {skillsRight.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 text-2xl text-light-gray font-semibold"
            >
              <img
                className=" sm:w-16 sm:h-16 lg:w-32 lg:h-32 rounded-md "
                src={skill.icon}
                alt={skill.title}
              />
              <div className="dark:text-white">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillList;
