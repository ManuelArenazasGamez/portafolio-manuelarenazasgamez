import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const ContactBar = () => {
  // Datos directos para evitar fetch y errores en Vercel
  const localData = {
    contactItems: [
      {
        type: "email",
        label: "manuel173are@gmail.com", // ⚠️ CAMBIA ESTO por tu correo real
        icon: "/images/icon/email-icon.svg", // Revisa que este icono exista en tu carpeta public
        link: "mailto:manuel173are@gmail.com"   // ⚠️ CAMBIA ESTO también (deja el "mailto:")
      },
      {
        type: "location",
        label: "Morelia, Michoacán, México",
        icon: "/images/icon/location-icon.svg", // Revisa que este icono exista
        link: "#"
      }
    ],
    socialItems: [
      {
        platform: "LinkedIn",
        icon: "/images/icon/linkedin-icon.svg", // Revisa que este icono exista
        link: "https://linkedin.com/in/manuel-arenazas-gamez/" // ⚠️ CAMBIA ESTO por tu enlace real
      },
      {
        platform: "GitHub",
        icon: "/images/icon/github-icon.svg", // Revisa que este icono exista
        link: "https://github.com/ManuelArenazasGamez" // Tu usuario de GitHub
      }
    ]
  };

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
            
            {/* Elementos de Contacto (Correo y Ubicación) */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {localData.contactItems.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  className="flex items-center gap-2 lg:gap-4 text-sm md:text-base"
                >
                  <Image
                    src={getImgPath(value.icon)}
                    alt={value.type}
                    width={24}
                    height={24}
                    className="min-w-[24px] min-h-[24px]"
                  />
                  <h6 className="text-sm md:text-base xl:text-xl hover:text-primary">
                    {value.label}
                  </h6>
                </Link>
              ))}
            </div>

            {/* Redes Sociales (LinkedIn y GitHub) */}
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {localData.socialItems.map((value, index) => (
                <Link
                  key={index}
                  href={value.link}
                  target="_blank" // Esto hace que se abra en una pestaña nueva
                  rel="noopener noreferrer" // Buena práctica de seguridad para enlaces externos
                >
                  <Image
                    src={getImgPath(value.icon)}
                    alt={value.platform}
                    width={30}
                    height={30}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;