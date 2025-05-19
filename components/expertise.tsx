"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { expertiseData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Expertise() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="expertise" className="scroll-mt-28 mb-28">
      <SectionHeading>Technical Expertise</SectionHeading>
      <div>
        {expertiseData.map((item, index) => (
          <React.Fragment key={index}>
            <Project {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
