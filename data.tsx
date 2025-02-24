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
        title: "Frontend Developer",
        subtitle: "ProtoNature",
        description: "Desarrollé un eCommerce completo en React, con funcionalidades como gestión de productos, carrito de compras, pagos y autenticación de usuarios. La aplicación es completamente responsiva, ofreciendo una experiencia de usuario fluida y optimizada para todos los dispositivos",
        date: "Ene 2025 ",
    },
    {
        id: 2,
        title: "App Climatica",
        subtitle: "Taggify",
        description: "Creé una aplicación del clima que permite consultar el pronóstico en tiempo real de cualquier ciudad del mundo. Utilizando APIs para obtener datos meteorológicos, la app presenta un diseño limpio y fácil de usar, mostrando la temperatura, condiciones climáticas y más, con una interfaz amigable y optimizada.",
        date: "June 2024",
    },
    {
        id: 3,
        title: "Codo a Codo",
        subtitle: "Curso Python Full Stack",
        description: "",
        date: "2024",
    },
    {
        id: 4,
        title: "Platzi",
        subtitle: "Curso definitivo HTML Y CSS",
        description: " ",
        date: "2023",
    },
    {
        id: 5,
        title: "Compañia Telefonica ",
        subtitle: "Cursos",
        description: "Wordpres / Javascript / Html5 y css / Metodologias Agiles ",
        date: "2023",
        
    },
    {
        id: 6,
        title: "Teclab Intituto",
        subtitle: "Tecnico Superior en Progrmacion",
        description: "Graduado",
        date: "2022-2024",
    },
    {
        id: 7,
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
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
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

export const dataPortfolio = [
    {
        id: 1,
        title: "Web ProtoNature",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/frang0doy/proto-nature",
        urlDemo: "https://proto-nature.vercel.app/",
    },
    {
        id: 2,
        title: "Aplicacion del clima",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/frang0doy/widget",
        urlDemo: "https://widget-puce-nu.vercel.app/",
    },
    
];

