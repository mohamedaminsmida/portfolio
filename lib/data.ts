// Icons moved to experience.tsx

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
  // {
  //   name: "Blog",
  //   hash: "#blog",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// Experience data moved to translation files

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, user authentication, cart functionality, and payment processing built with Laravel and Livewire.",
    tags: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL", "Stripe"],
    imageUrl: "/images/project1.jpg",
    link: "https://github.com/yourusername/laravel-ecommerce",
  },
  {
    title: "Admin Dashboard System",
    description:
      "A comprehensive admin dashboard system built with Laravel Filament, featuring role-based access control, activity logging, and a beautiful UI for managing application data.",
    tags: ["Laravel", "Filament", "Tailwind CSS", "MySQL", "TALL Stack"],
    imageUrl: "/images/project2.jpg",
    link: "https://github.com/yourusername/filament-admin",
  },
  {
    title: "Real Estate Management System",
    description:
      "A platform for real estate agencies to manage properties, clients, and transactions with a dynamic frontend built using Laravel, Livewire, and Alpine.js.",
    tags: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS", "MySQL"],
    imageUrl: "/images/project3.jpg",
    link: "https://github.com/yourusername/laravel-real-estate",
  },
] as const;

export const skillsData = [
  "Laravel",
  "Swagger",
  "Vue.js",
  "Microservice",
  "NestJS",
  "JavaScript",
  "PostGIS",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "SMTP",
  "Websockets",
  "REST API",
  "PHP",
  "Node.js",
  "Directus CMS",
  "Git",
  "CI/CD",
  "Docker",
  "HTML",
  "CSS",
  "Tailwind CSS",
] as const;

export const testimonialData = [
  {
    name: "Sarah Johnson",
    title: "CEO at TechStart",
    text: "Yassine delivered an exceptional website that perfectly captured our brand. His attention to detail and technical expertise are outstanding.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Ahmed Hassan",
    title: "Marketing Director",
    text: "Working with Yassine was a pleasure. He understood our requirements quickly and delivered a solution that exceeded our expectations.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Maria Garcia",
    title: "Product Manager",
    text: "Yassine's technical skills and creativity make him a valuable asset to any project. He built our platform with scalability and performance in mind.",
    image: "/images/testimonial3.jpg",
  },
] as const;

export const blogData = [
  {
    title: "Building Dynamic UIs with Laravel Livewire",
    excerpt: "Learn how to create reactive interfaces without writing a single line of JavaScript using Laravel Livewire.",
    date: "2023-12-01",
    slug: "building-dynamic-uis-with-laravel-livewire",
  },
  {
    title: "Admin Panels Made Easy with Filament",
    excerpt: "Discover how Laravel Filament can help you build beautiful admin panels and CRUD interfaces in minutes.",
    date: "2023-11-15",
    slug: "admin-panels-made-easy-with-filament",
  },
  {
    title: "The TALL Stack: Laravel's Modern Frontend",
    excerpt: "A comprehensive guide to the TALL stack: Tailwind CSS, Alpine.js, Laravel, and Livewire for modern web applications.",
    date: "2023-10-20",
    slug: "tall-stack-laravels-modern-frontend",
  },
] as const;
