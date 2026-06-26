import React from 'react';

const ExperienceSec = () => {
    // Tus 5 experiencias ordenadas de la más reciente a la más antigua
    const experiences = [
        {
            year: "Ene 2026 - Jun 2026",
            title: "Residente Profesional - Soporte e Infraestructura",
            company: "AutoZone",
            type: "Presencial",
            description: "Gestión integral y mantenimiento preventivo de la infraestructura computacional en AutoZone Hub. Optimización de hardware, validación de conectividad y soporte técnico operativo."
        },
        {
            year: "2025 - 2026",
            title: "Proyectos de Redes y Ciberseguridad",
            company: "Independiente / Laboratorio",
            type: "Prácticas de Campo",
            description: "Diseño e implementación de red local con segmentación de VLANs, CCTV PoE y APs dedicados. Prácticas continuas de escaneo de vulnerabilidades y análisis de tráfico utilizando Nmap y Wireshark."
        },
        {
            year: "Ene 2025 - Jul 2025",
            title: "Administrador de Redes (Servicio Social)",
            company: "Centro de Cómputo ITM",
            type: "Presencial",
            description: "Administración de redes locales, mantenimiento de hardware y diagnóstico técnico. Brindé soporte de primer nivel para la resolución ágil de incidencias de conectividad a usuarios académicos."
        },
        {
            year: "Feb 2021 - Jun 2021",
            title: "Practicante - Gestión de Sistemas",
            company: "AutoZone",
            type: "Presencial",
            description: "Gestión de inventarios y control de activos. Captura, registro y análisis de datos en sistemas informáticos, contribuyendo a la eficiencia de los procesos administrativos y operativos."
        },
        {
            year: "Ago 2019 - Dic 2019",
            title: "Becario de TI en Centro de Cómputo",
            company: "CECYTE 12",
            type: "Presencial",
            description: "Mantenimiento preventivo y correctivo de hardware y software. Instalación de cableado estructurado, etiquetado de red y provisión de soporte técnico a personal docente y administrativo."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experiencia</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {/* Ajuste de altura dinámica (h-full) para que la línea conecte bien aunque el texto sea largo */}
                                    {index < experiences.length && (
                                        <div className={`absolute left-[6px] top-3 w-px ${index < experiences.length - 1 ? 'h-[130%] sm:h-full min-h-[120px]' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 0 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-6 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-semibold">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal text-secondary">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-6 sm:pl-0">
                                    <p className="leading-relaxed text-base text-gray-700">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;