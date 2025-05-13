import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaServer, FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Degree",
    location: "Casablanca, Morocco",
    description:
      "I graduated with a Bachelor's degree in Computer Science, focusing on software engineering and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Rabat, Morocco",
    description:
      "I worked as a front-end developer for a digital agency, building responsive websites and web applications for various clients.",
    icon: React.createElement(FaCode),
    date: "2018 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Casablanca, Morocco",
    description:
      "I advanced to a full-stack role, working with React, Node.js, and various databases to build complete web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Senior Web Developer",
    location: "Remote",
    description:
      "I'm now working as a senior developer specializing in Next.js, React, and modern web technologies. I focus on building performant, accessible, and beautiful web experiences.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, user authentication, cart functionality, and payment processing.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Stripe"],
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=E-Commerce+Platform",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "AI Content Generator",
    description:
      "An application that uses AI to generate content for blogs, social media, and marketing materials. Features a user-friendly interface and customization options.",
    tags: ["React", "TypeScript", "OpenAI API", "Node.js", "Express"],
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=AI+Content+Generator",
    link: "https://github.com/yourusername/ai-content-generator",
  },
  {
    title: "Real Estate Marketplace",
    description:
      "A platform for listing and searching properties with advanced filtering, map integration, and virtual tours.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Mapbox", "AWS"],
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=Real+Estate+Marketplace",
    link: "https://github.com/yourusername/real-estate-marketplace",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "GraphQL",
  "REST API",
  "Git",
  "CI/CD",
  "Docker",
  "AWS",
  "Firebase",
  "Vercel",
  "Figma",
  "UI/UX Design",
] as const;

export const testimonialData = [
  {
    name: "Sarah Johnson",
    title: "CEO at TechStart",
    text: "Yassine delivered an exceptional website that perfectly captured our brand. His attention to detail and technical expertise are outstanding.",
    image: "https://placehold.co/150x150/6366f1/ffffff?text=SJ",
  },
  {
    name: "Ahmed Hassan",
    title: "Marketing Director",
    text: "Working with Yassine was a pleasure. He understood our requirements quickly and delivered a solution that exceeded our expectations.",
    image: "https://placehold.co/150x150/6366f1/ffffff?text=AH",
  },
  {
    name: "Maria Garcia",
    title: "Product Manager",
    text: "Yassine's technical skills and creativity make him a valuable asset to any project. He built our platform with scalability and performance in mind.",
    image: "https://placehold.co/150x150/6366f1/ffffff?text=MG",
  },
] as const;

export const blogData = [
  {
    title: "Building Performant Next.js Applications",
    excerpt: "Learn how to optimize your Next.js applications for maximum performance and user experience.",
    date: "2023-12-01",
    slug: "building-performant-nextjs-applications",
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover why Tailwind CSS has become one of the most popular utility-first CSS frameworks.",
    date: "2023-11-15",
    slug: "power-of-tailwind-css",
  },
  {
    title: "Implementing 3D Elements with Three.js",
    excerpt: "A step-by-step guide to adding impressive 3D elements to your web projects using Three.js.",
    date: "2023-10-20",
    slug: "implementing-3d-elements-threejs",
  },
] as const;
