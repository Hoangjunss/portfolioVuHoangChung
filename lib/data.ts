export const portfolioData = {
  name: "Vũ Hoàng Chung",
  title: "Backend Java Developer",
  tagline: "Building scalable backend systems with Spring Boot and Microservices",
  phone: "0357628050",
  email: "vuhoangchung2020@gmail.com",
  github: "https://github.com/Hoangjunss",
  location: "Ho Chi Minh City, Vietnam",
  objective:
    "Goal-oriented Fresher Java Developer with a strong foundation in Spring Boot and Microservices. Dedicated to building scalable backend systems and mastering clean code principles (SOLID). Proven ability to optimize database performance and implement secure authentication flows.",

  skills: [
    {
      category: "Languages",
      items: ["Java", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "WebSocket",
        "JUnit 5",
        "Mockito",
      ],
    },
    {
      category: "Frontend",
      items: ["ReactJS", "Redux Toolkit", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Database & Caching",
      items: ["MySQL", "Redis"],
    },
    {
      category: "Tools & DevOps",
      items: ["Docker", "Git", "Maven", "Postman", "Swagger"],
    },
    {
      category: "Architecture",
      items: ["SOLID Principles", "Design Patterns", "Microservices"],
    },
  ],

  experience: [
    {
      company: "VINIPR CO., LTD.",
      position: "Backend Java Developer Intern",
      location: "Ho Chi Minh City",
      startDate: "May 2025",
      endDate: "Dec 2025",
      achievements: [
        "Engineered backend features for e-commerce modules using Spring Boot, ensuring high data integrity for order management and payment flows.",
        "Enhanced system performance by optimizing complex SQL queries, reducing average API response times by ~20% in staging.",
        "Collaborated in an Agile/Scrum environment, contributing to daily stand-ups, code reviews, and sprint planning.",
        "Applied SOLID principles to refactor legacy code, improving maintainability and readability.",
      ],
    },
  ],

  education: {
    school: "Saigon University",
    degree: "Bachelor of Information Technology",
    gpa: "3.3/4.0",
    location: "Ho Chi Minh City",
    startDate: "2022",
    endDate: "2026",
    expectedGraduation: true,
    coursework:
      "Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management (MySQL), Web Development",
  },

  projects: [
    {
      title: "Real-time Dating Application",
      description: "A modern dating platform with real-time messaging and matching features",
      technologies: ["Spring Boot", "WebSocket", "MySQL", "ReactJS", "JWT"],
      github: "https://github.com/Hoangjunss/dating",
      startDate: "Jan 2026",
      endDate: "Apr 2026",
      highlights: [
        "Built a real-time messaging engine using WebSocket & STOMP with sub-50ms latency",
        "Secured REST APIs with Spring Security & JWT implementing RBAC",
        "Optimized matching feature with database indexes and refined JPA queries",
        "Wrote comprehensive unit and integration tests with JUnit 5 & Mockito",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
          caption: "Real-time Messaging Interface",
        },
        {
          url: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&q=80",
          caption: "User Matching Algorithm Dashboard",
        },
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "Profile Management & Security",
        },
      ],
    },
    {
      title: "Secure E-commerce Platform",
      description: "Full-stack e-commerce solution with advanced security and caching",
      technologies: ["Spring Boot", "Redis", "Docker", "Cloudinary", "MySQL"],
      github: "https://github.com/Hoangjunss/ecommerce",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      highlights: [
        "Implemented 2FA OTP authentication using Java Mail and Redis with TTL",
        "Integrated Redis caching reducing database load and keeping response times low",
        "Packaged application with Docker for consistent development/staging environments",
        "Used Cloudinary API for image resizing and lazy loading optimization",
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "E-commerce Product Catalog",
        },
        {
          url: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
          caption: "Secure Payment Processing",
        },
        {
          url: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
          caption: "Order Management Dashboard",
        },
      ],
    },
  ],
};
