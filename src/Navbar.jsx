import { Github, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-8 py-5 bg-white shadow-md fixed top-0 left-0 z-20">
      <nav className="flex items-center">
        <img
          src="chillguy.png"
          alt="Chill Guy Logo"
          className="w-10 h-10 mr-4"
        />
        <p className="font-mono font-bold text-lg">I&apos;m a Chill Guy</p>
      </nav>
      <div className="flex items-center gap-5">
        <a
          href="https://www.github.com/ramxcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-200"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ramxcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.x.com/ramxcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 transition-colors duration-200"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
