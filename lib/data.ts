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
    name: "Expertise",
    hash: "#expertise",
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

export const expertiseData = [
  {
    title: "Laravel",
    description:
      "Built sophisticated backend systems with Laravel framework, focusing on scalability and performance. Developed RESTful APIs, implemented complex business logic, and optimized database queries for high-traffic applications. Expertise in Laravel's ecosystem including events, queues, and service providers.",
    tags: ["REST API", "Eloquent ORM", "Jobs & Queues", "Events", "Observers", "Middleware", "Service Providers", "Authentication"],
    imageUrl: "/images/laravel-logo.png", // Replace with actual Laravel logo
    link: "https://laravel.com",
  },
  {
    title: "Laravel Reverb",
    description:
      "Developed real-time communication systems with Laravel Reverb, creating responsive and interactive applications. Implemented WebSocket solutions for instant notifications, live dashboards, and chat applications. Designed scalable broadcasting architecture with secure authentication and efficient channel management.",
    tags: ["WebSockets", "Real-time Updates", "Broadcasting", "Channels", "Authentication", "Scaling", "Event Broadcasting", "Presence Channels"],
    imageUrl: "/images/reverb-logo.png", // Replace with actual Reverb logo
    link: "https://laravel.com/docs/10.x/reverb",
  },
  {
    title: "Filament",
    description:
      "Built sophisticated admin panels and CRUD interfaces with Laravel Filament. Developed custom plugins and components to extend functionality, creating intuitive and powerful administrative dashboards for content management.",
    tags: ["Admin Panels", "CRUD", "Google Maps Integration", "Custom Fields", "Widgets", "Form Builder", "Table Builder", "Access Control"],
    imageUrl: "/images/filament-logo.png", // Replace with actual Filament logo
    link: "https://filamentphp.com",
  },
  {
    title: "Vue.js",
    description:
      "Engineered dynamic and responsive user interfaces with Vue.js, creating seamless user experiences. Developed single-page applications with component-based architecture, state management using Vuex, and client-side routing. Implemented reactive data binding, custom directives, and optimized rendering for high-performance web applications.",
    tags: ["Components", "Vuex", "Vue Router", "Composition API", "Transitions", "API Integration", "Reactive UI"],
    imageUrl: "/images/vue-logo.png", // Replace with actual Vue.js logo
    link: "https://vuejs.org",
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
