import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Instagram, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/francisco-godoy-6b7868279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/frang0doy?mx=2",
    },
    {
        id: 4,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/frang0doy/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Frontend",
        subtitle: "Grupo A - Freelance",
        description: "Desarrollo de landing page minimalista para marca de diseño, construcción e instalación. Implementé Next.js con JavaScript, Tailwind CSS y GSAP para crear una experiencia visual moderna y funcional que refleja la identidad de la marca.",
        date: "Oct 2025 - Actualidad",
    },
    {
        id: 2,
        title: "Desarrollador Frontend",
        subtitle: "WentzelPharma - Interstal S.A.",
        description: "Desarrollo de sitio web corporativo para empresa farmacéutica. Creé una plataforma moderna con Next.js, JavaScript, Tailwind CSS y GSAP, enfocada en proporcionar una experiencia de usuario optimizada y profesional para el sector farmacéutico.",
        date: "Jul 2025 - Sep 2025",
    },
    {
        id: 3,
        title: "Desarrollador Frontend",
        subtitle: "Haras Chimpay - Interstal S.A.",
        description: "Desarrollo de sitio web corporativo para empresa equina. Implementé Vue.js con Nuxt.js, Tailwind CSS y Firebase para crear una plataforma responsiva con galería de imágenes y sistema de contacto integrado, enfocada en mostrar los servicios equinos de la empresa.",
        date: "May 2025 - Jun 2025",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "ProtoNature",
        description: "Desarrollé un eCommerce completo en React, con funcionalidades como gestión de productos, carrito de compras, pagos y autenticación de usuarios. La aplicación es completamente responsiva, ofreciendo una experiencia de usuario fluida y optimizada para todos los dispositivos",
        date: "Ene 2025",
    },
    {
        id: 5,
        title: "App Climatica",
        subtitle: "Taggify",
        description: "Creé una aplicación del clima que permite consultar el pronóstico en tiempo real de cualquier ciudad del mundo. Utilizando APIs para obtener datos meteorológicos, la app presenta un diseño limpio y fácil de usar, mostrando la temperatura, condiciones climáticas y más, con una interfaz amigable y optimizada.",
        date: "June 2024",
    },
    {
        id: 6,
        title: "Codo a Codo",
        subtitle: "Curso Python Full Stack",
        description: "",
        date: "2024",
    },
    {
        id: 7,
        title: "Platzi",
        subtitle: "Curso definitivo HTML Y CSS",
        description: " ",
        date: "2023",
    },
    {
        id: 8,
        title: "Compañia Telefonica ",
        subtitle: "Cursos",
        description: "Wordpres / Javascript / Html5 y css / Metodologias Agiles ",
        date: "2023",
        
    },
    {
        id: 9,
        title: "Teclab Intituto",
        subtitle: "Tecnico Superior en Progrmacion",
        description: "Graduado",
        date: "2022-2024",
    },
    {
        id: 10,
        title: "Colegio Cervante",
        subtitle: "Bachillerato en ciencias sociales",
        description: "",
        date: "Dic 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo.",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "React" },
            { name: "Vue.js" },
            { name: "Angular" },
            { name: "Next.js" },
            { name: "JavaScript" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Tailwind CSS" },
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: ".NET/C#" },
            { name: "Node.js" },
            { name: "Python" },
            { name: "PHP" },
            { name: "SQL Server" },
            { name: "MySQL" },
        ]
    },
    {
        category: "Herramientas & Otros",
        skills: [
            { name: "Git" },
            { name: "Docker" },
            { name: "AWS" },
            { name: "Figma" },
            { name: "Firebase" },
        ]
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web ProtoNature",
        image: "/image-1.jpg",
        urlGithub: "",
        urlDemo: "https://www.protonature.com/",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        description: "E-commerce completo desarrollado en React con funcionalidades avanzadas como gestión de productos, carrito de compras, pagos integrados y autenticación de usuarios.",
        showCodeButton: false
    },
    {
        id: 2,
        title: "Aplicación del Clima",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/frang0doy/widget",
        urlDemo: "https://widget-puce-nu.vercel.app/",
        technologies: ["React", "JavaScript", "API Integration", "CSS3"],
        description: "Aplicación meteorológica que permite consultar el pronóstico en tiempo real de cualquier ciudad del mundo con una interfaz limpia y fácil de usar.",
        showCodeButton: true
    },
    {
        id: 3,
        title: "Dashboard Administrativo",
        image: "/image-3.png",
        urlGithub: "http://github.com/frang0doy/dashboard",
        urlDemo: "https://dashboard-three-sooty-78.vercel.app/login",
        technologies: ["React", "Node.js", "MongoDB", "JWT", "Chart.js"],
        description: "Dashboard completo con sistema de autenticación, gráficos interactivos y gestión de datos en tiempo real para administración empresarial.",
        showCodeButton: true
    },
    {
        id: 4,
        title: "Haras Chimpay",
        image: "/haras-chimpay.png",
        urlGithub: "",
        urlDemo: "https://www.haraschimpay.com/",
        technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Firebase"],
        description: "Sitio web corporativo para empresa equina con diseño responsivo, galería de imágenes y sistema de contacto integrado.",
        showCodeButton: false
    },
    {
        id: 5,
        title: "WentzelPharma",
        image: "/wentzel.png",
        urlGithub: "https://github.com/frang0doy/wentzel-pharma",
        urlDemo: "https://wentzel-pharma.vercel.app/",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "GSAP"],
        description: "Sitio web corporativo para empresa farmacéutica con diseño moderno, animaciones fluidas y experiencia de usuario optimizada.",
        showCodeButton: true
    },
    {
        id: 6,
        title: "Grupo A",
        image: "/grupoa.png",
        urlGithub: "",
        urlDemo: "https://grupo-a.netlify.app/",
        technologies: ["Next.js", "JavaScript", "Tailwind CSS", "GSAP"],
        description: "Landing page minimalista para marca de diseño, construcción e instalación con enfoque en espacios modernos y funcionales.",
        showCodeButton: false
    },
];

