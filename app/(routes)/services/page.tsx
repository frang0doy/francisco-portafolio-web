import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de desarrollo web, tanto en el frontend como en el backend. En el frontend, utilizo React, Vue.js, Angular, HTML, CSS, y JavaScript. En el backend, trabajo con PHP, Python, Next.js, y MySQL para crear sitios y aplicaciones web funcionales, atractivas y escalables que reflejan la identidad de marca de mis clientes.</p>
                    <button 
  className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
>
  <a href="mailto:franciscogodoy_@hotmail.com" className="text-white">
    Contacta conmigo
  </a>
</button>

                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;
