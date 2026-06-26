import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-20 md:pt-32 pb-12 lg:pb-30 xl:pt-40">
      <div className="container">
        {/* Aquí está el cambio: una cuadrícula de 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8 items-center">
          
          {/* Columna Izquierda: Texto */}
          <div className="flex flex-col gap-4 md:gap-7">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                  Manuel Arenazas Gámez
                </h1>
                <div className="wave hidden sm:block">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon2.svg")}
                    alt="wave-icon"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Ingeniero en Sistemas Computacionales
              </h2>
              <h3 className="text-lg md:text-xl text-primary font-medium mt-2">
                Cybersecurity | IT Infrastructure & Services Security
              </h3>
            </div>
            
            <p className="text-secondary font-normal max-w-xl text-base md:text-lg">
              Egresado del Instituto Tecnológico de Morelia. Especializado en la 
              administración de redes, mantenimiento de activos tecnológicos y 
              estrategias de ciberseguridad para garantizar operaciones estables y seguras.
            </p>
          </div>

          {/* Columna Derecha: Imagen Transparente */}
          {/* Al estar en un grid, la foto se queda en su lado y no invade el texto */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <Image
              src={getImgPath("/images/home/banner/banner-img.png")}
              alt="Manuel Arenazas - Perfil"
              width={600}
              height={550}
              // Quité 'object-cover' y puse 'object-contain' para que no corte tu imagen transparente
              className="object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default index;