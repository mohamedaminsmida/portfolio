"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaTwitter } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslation } from "@/lib/hooks/useTranslation";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Yassine portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-secondary-500 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-primary-600 dark:text-primary-400">{t('intro.greeting')}</span> {t('intro.role')}{" "}
        <span className="font-bold">{t('intro.title')}</span> {t('intro.with')}{" "}
        <span className="font-bold">{t('intro.experience')}</span> {t('intro.description')}{" "}
        <span className="italic">{t('intro.focus')}</span> {t('intro.with')}{" "}
        <span className="underline decoration-secondary-500 underline-offset-2">{t('intro.tech')}</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-3 px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Main action buttons */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-3 sm:mb-0">
          <Link
            href="#contact"
            className="group bg-primary-600 text-white px-5 sm:px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-primary-700 active:scale-105 transition w-full sm:w-auto"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            {t('intro.contactButton')}{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-5 sm:px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:border-white/10 w-full sm:w-auto"
            href="/CV.pdf"
            download
          >
            {t('intro.downloadCV')}{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-2">
          <a
            className="bg-white p-3 sm:p-4 text-gray-700 hover:text-primary-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-primary-400 dark:border-white/10"
            href="https://linkedin.com/in/yassine-dev"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin className="text-lg" />
          </a>

          <a
            className="bg-white p-3 sm:p-4 text-gray-700 hover:text-primary-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-primary-400 dark:border-white/10"
            href="https://github.com/yassine-dev"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare className="text-xl" />
          </a>

          <a
            className="bg-white p-3 sm:p-4 text-gray-700 hover:text-primary-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:text-primary-400 dark:border-white/10"
            href="https://twitter.com/yassine_dev"
            target="_blank"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="text-lg" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
