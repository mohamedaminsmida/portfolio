"use client";

import { useRef } from "react";
import { expertiseData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/lib/hooks/useTranslation";

type ProjectProps = (typeof expertiseData)[number];

// Helper function to get translated title based on project title
const getTranslatedTitle = (title: string, t: (key: string) => string): string => {
  if (title === "Laravel") {
    return t('projects.laravel.title') || title;
  } else if (title === "Laravel Reverb") {
    return t('projects.reverb.title') || title;
  } else if (title === "Filament") {
    return t('projects.filament.title') || title;
  } else if (title === "Vue.js") {
    return t('projects.vue.title') || title;
  }
  return title;
};

// Helper function to get translated description based on project title
const getTranslatedDescription = (title: string, description: string, t: (key: string) => string): string => {
  if (title === "Laravel") {
    return t('projects.laravel.description') || description;
  } else if (title === "Laravel Reverb") {
    return t('projects.reverb.description') || description;
  } else if (title === "Filament") {
    return t('projects.filament.description') || description;
  } else if (title === "Vue.js") {
    return t('projects.vue.description') || description;
  }
  return description;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const { t } = useTranslation();
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
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-16 relative hover:bg-gray-50 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Mobile logo - shown only on small screens */}
        <div className="block sm:hidden w-full py-6 relative bg-gray-50 dark:bg-gray-900/30 flex justify-center items-center">
          <div className={`relative p-2 ${(imageUrl.includes('reverb-logo')) ? 'w-28 h-28' : (imageUrl.includes('laravel-logo')) ? 'w-28 h-28' : (imageUrl.includes('filament-logo')) ? 'w-24 h-24' : (imageUrl.includes('vue-logo')) ? 'w-16 h-16' : 'w-20 h-20'}`}>
            <Image
              src={imageUrl}
              alt={`${title} logo`}
              fill
              className={`object-contain p-2 ${(imageUrl.includes('filament-logo') || imageUrl.includes('reverb-logo')) ? 'dark:invert dark:brightness-[0.85] dark:hue-rotate-180' : ''}`}
              quality={90}
            />
          </div>
        </div>

        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:w-[60%] flex flex-col h-full sm:group-even:ml-[12rem] sm:h-[24rem]">
          <div className="flex items-center">
            <h3 className="text-lg sm:text-xl font-semibold text-primary-600 dark:text-primary-400">
              {getTranslatedTitle(title, t)}
            </h3>
          </div>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70 text-xs sm:text-sm">
            {getTranslatedDescription(title, description, t)}
          </p>

          <div className="mt-4">
            <h4 className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
              {t('projects.keyFeatures') || 'Key Features & Skills:'}
            </h4>
            <ul className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <li
                  className="bg-gray-100 text-gray-700 px-1.5 py-0.5 text-[9px] rounded dark:bg-gray-700 dark:text-gray-200 font-medium"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop logo - hidden on small screens */}
        <div className="absolute hidden sm:flex top-[40%] -translate-y-1/2 right-[5rem] w-36 h-36 items-center justify-center group-even:right-[initial] group-even:left-[2rem] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/50 dark:to-black/50 rounded-full shadow-xl border border-gray-100 dark:border-gray-800">
          <div className={`relative p-2 ${(imageUrl.includes('reverb-logo')) ? 'w-32 h-32' : (imageUrl.includes('laravel-logo')) ? 'w-32 h-32' : (imageUrl.includes('filament-logo')) ? 'w-28 h-28' : (imageUrl.includes('vue-logo')) ? 'w-20 h-20' : 'w-24 h-24'}`}>
            <Image
              src={imageUrl}
              alt={`${title} logo`}
              fill
              className={`object-contain p-2 transition-all duration-300 group-hover:scale-105 ${(imageUrl.includes('filament-logo') || imageUrl.includes('reverb-logo')) ? 'dark:invert dark:brightness-[0.85] dark:hue-rotate-180' : ''}`}
              quality={100}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
