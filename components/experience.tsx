"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { FaCode } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { SiLaravel } from "react-icons/si";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Define experience entries with their translation keys and icons
  const experienceEntries = [
    {
      translationKey: "experience.trisoweb",
      icon: React.createElement(FaCode),
    },
    {
      translationKey: "experience.satoripop",
      icon: React.createElement(CgWorkAlt),
    },
    {
      translationKey: "experience.education",
      icon: React.createElement(LuGraduationCap),
    },
    {
      translationKey: "experience.laravel",
      icon: React.createElement(SiLaravel),
    },
  ];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading translationKey="experience.title" />
      <VerticalTimeline lineColor="" animate={true}>
        {experienceEntries.map((entry, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={t(`${entry.translationKey}.date`)}
              icon={entry.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {t(`${entry.translationKey}.title`)}
              </h3>
              <p className="font-normal !mt-0">
                {t(`${entry.translationKey}.location`)}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {t(`${entry.translationKey}.description`)}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
