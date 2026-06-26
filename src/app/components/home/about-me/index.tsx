import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                {/* Puedes reemplazar esta imagen después con una foto tuya profesional */}
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="Manuel Arenazas - Perfil"
                  width={303}
                  height={440}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  Soy un Ingeniero en Sistemas Computacionales especializado en la administración 
                  de infraestructura TI y ciberseguridad. Mi enfoque principal es garantizar la 
                  disponibilidad, integridad y protección de las redes y sistemas corporativos. 
                  Tengo experiencia práctica en el mantenimiento preventivo, segmentación de redes (VLANs), 
                  hardening de sistemas y análisis de vulnerabilidades, siempre buscando optimizar los 
                  recursos tecnológicos para asegurar una operatividad continua y segura.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "01", label: "Proyectos de Gestión de Infraestructura TI" },
                    { count: "Sys", label: "Mantenimiento Preventivo y Soporte" },
                    { count: "Net", label: "Configuración y Ruteo de Redes" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black font-medium mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contenedor principal para Stack e Idiomas */}
                <div className="pt-8 xl:pt-14 flex flex-col gap-6">
                  
                  {/* Fila 1: Core Stack */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3.5 whitespace-nowrap min-w-[140px]">
                      <Image
                        src={getImgPath("/images/icon/skill-icon.svg")}
                        alt="tech-icon"
                        width={30}
                        height={30}
                      />
                      <p className="text-base xl:text-xl text-black font-semibold">Core Stack</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {["Redes (Cisco)", "Ciberseguridad", "Linux (Fedora/Kali)", "Python"].map((tech) => (
                        <p
                          key={tech}
                          className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-sm md:text-base xl:text-lg border border-gray-200"
                        >
                          {tech}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Fila 2: Idiomas */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3.5 whitespace-nowrap min-w-[140px]">
                      <Image
                        src={getImgPath("/images/icon/lang-icon.svg")}
                        alt="lang-icon"
                        width={30}
                        height={30}
                      />
                      <p className="text-base xl:text-xl text-black font-semibold">Idiomas</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {["Inglés", "Español (Nativo)"].map((lang) => (
                        <p
                          key={lang}
                          className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-sm md:text-base xl:text-lg border border-gray-200"
                        >
                          {lang}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;