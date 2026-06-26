import Logo from "../logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black/20" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black/20" />
          </div>
          <p className="text-secondary text-sm md:text-base text-center">
            &copy; {currentYear} Manuel Arenazas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;