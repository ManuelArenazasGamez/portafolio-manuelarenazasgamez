import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Mantenemos esto porque algunas plantillas lo necesitan para cargar las fotos correctamente
  images: {
    unoptimized: true,
  },
};

export default nextConfig;