"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-50 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Mobile image - shown only on small screens */}
        <div className="block sm:hidden w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title} project`}
            fill
            className="object-cover"
            quality={85}
          />
        </div>

        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] sm:h-[22rem]">
          <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 dark:text-primary-400">{title}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
            {description}
          </p>

          <ul className="flex flex-wrap mt-6 gap-2.5 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-primary-100 text-primary-700 px-3 py-1.5 text-[0.65rem] sm:text-[0.7rem] sm:px-3.5 uppercase tracking-wider rounded-full dark:bg-primary-900/30 dark:text-primary-300 font-medium border border-primary-200 dark:border-primary-800/30 shadow-sm"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop image - hidden on small screens */}
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          width={500}
          height={300}
          quality={95}
          className="absolute hidden sm:block top-10 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
