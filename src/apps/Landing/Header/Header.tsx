import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Vank from "@/assets/Vank.png";
import WordLenguaje from "@/assets/Icon/WordLenguaje.svg";
import { FlagIcon } from "react-flag-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [t, i18n] = useTranslation("global");

  const menuRef = useRef<any>(null);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/People", title: "Personas" },
    { path: "/Companies", title: "Empresas" },
    { path: "/VankCards", title: "VankCards" },
  ];

  const toogleLenguaje = (len: string) => {
    console.log(len);

    // const leng = i18n.language === "en" ? "es" : "en";

    i18n.changeLanguage(len);
    localStorage.setItem("lenguaje", len);
  };

  useEffect(() => {
    function handleClickOutside(event?: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
        return;
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full mx-auto xl:pl-[97px] pl-4 xl:pr-0 pr-4 bg-[--background-dark-black] z-50">
      <nav className="flex justify-between items-center py-4 bg-transparent ">
        <div className="flex items-center gap-20">
          <a href="/" className="w-[84px] h-[29px]">
            <img src={Vank} className="w-full h-full object-cover" alt="" />
          </a>

          {/* nav items for large devices */}
          <ul className="hidden md:flex gap-12 items-center">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-[--text-body]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-[--yellow] text-[#FFFFFF]"
                      : "text-[#D9D9D9]"
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* sing and login btn */}
        <div className="hidden  lg:flex items-center gap-x-6 pr-2">
          <div className="text-base font-bold space-x-2 hidden lg:block">
            <Link
              to="/Auth"
              className="py-3 px-4 rounded-[40px] bg-[--yellow] text-[--background-dark] text-sm"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/Auth"
              className="py-3 px-4 border border-[--yellow] rounded-[40px] text-[--yellow] text-sm"
            >
              Registrarse
            </Link>
          </div>
          <div
            className="relative w-[80px] flex items-center cursor-pointer"
            onClick={() => setIsMenu(!isMenu)}
            ref={menuRef}
          >
            <div className="relative w-[40px] h-full flex">
              <img
                src={WordLenguaje}
                alt=""
                className="w-full h-full object-cover"
              />
              <span
                className={`text-[10px] absolute ${
                  i18n.language === "pt" ? "right-[2px]" : "right-0"
                }  top-1/2 -translate-y-1/2 text-[--yellow] mt-[1px]`}
              >
                {i18n.language === "es"
                  ? "Es"
                  : i18n.language === "en"
                  ? "En"
                  : "Pt"}
              </span>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ${
                isMenu ? "rotate-0" : "rotate-180"
              } mt-[2px] transition-all duration-300 cursor-pointer`}
              onClick={() => setIsMenu(!isMenu)}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 15L12 10L7 15"
                  stroke="#FFED00"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <AnimatePresence>
              {isMenu && (
                <motion.ul
                  className="bg-[--background-dark-black] absolute w-28 z-50 -left-5 top-12 rounded-lg p-2 flex flex-col justify-between gap-1"
                  initial={{ opacity: 0, y: "-50%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{
                    opacity: 0,
                    y: "-50%",
                    transition: { duration: "0.35" },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: "100",
                    duration: "0.75",
                  }}
                >
                  <li
                    className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] text-sm hover:bg-[--dark-gray] ${
                      i18n.language === "es" && "bg-[--dark-gray]"
                    } cursor-pointer text-[--yellow]`}
                    onClick={() => {
                      toogleLenguaje("es");
                      setIsMenu(false);
                    }}
                  >
                    {/* <FlagIcon code="ES" className="rounded-[3px]" /> */}
                    Español
                  </li>
                  <li
                    className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] text-sm hover:bg-[--dark-gray] ${
                      i18n.language === "en" && "bg-[--dark-gray]"
                    } cursor-pointer text-[--yellow]`}
                    onClick={() => {
                      toogleLenguaje("en");
                      setIsMenu(false);
                    }}
                  >
                    {/* <FlagIcon code="US" className="rounded-[3px]" /> */}
                    English
                  </li>
                  <li
                    className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] text-sm hover:bg-[--dark-gray] ${
                      i18n.language === "pt" && "bg-[--dark-gray]"
                    } cursor-pointer text-[--yellow]`}
                    onClick={() => {
                      toogleLenguaje("pt");
                      setIsMenu(false);
                    }}
                  >
                    {/* <FlagIcon code="PT" className="rounded-[3px]" /> */}
                    Portugués
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H14M4 18H9"
                  stroke="#eff0f1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </nav>
      {/* nav for mobile */}
      <div
        className={`px-4 bg-[--background-dark] py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-[--text-body] first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-[--yellow]" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/Auth">Log in</Link>
          </li>
          <li className="text-white py-1">
            <Link to="/Auth">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
