import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full shadow-lg px-4 py-2 flex justify-center items-center space-x-4 transition-all duration-300">
      <NavItem to="hero" label="Home" />
      <NavItem to="About" label="About" />
      <NavItem to="projects" label="Projects" />
      <NavItem to="skills" label="Skills" />
      <NavItem to="contact" label="Contact" />
    </nav>
  );
};

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="!text-white text-lg md:text-xl hover:!text-blue-400 transition cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default Navbar;
