import "../styles/navbar.css";

import jwtSymbol from "../assets/jwt-symbol.svg";
import JwtWordmark from "../assets/jwt-wordmark.svg?react";

import { MdOutlineComputer } from "react-icons/md";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const { preference, setPreference } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
  <header className="header-shell" ref={menuRef}>

    <div className="announcement-bar">

      <span>
        Get up-to-speed with JSON Web Tokens.
      </span>

      <a href="#">
        Get the JWT Handbook for free ↗
      </a>

    </div>

    <nav className="navbar">
        <div className="brand">
          <img
            src={jwtSymbol}
            alt="JWT Symbol"
            className="jwt-symbol"
          />

          <JwtWordmark className="jwt-wordmark" />

          <span className="brand-text">
            Debugger
          </span>
        </div>

        <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <li
            className="active"
            onClick={() => setMenuOpen(false)}
          >
            Debugger
          </li>

          <li onClick={() => setMenuOpen(false)}>
            Introduction
          </li>

          <li onClick={() => setMenuOpen(false)}>
            Libraries
          </li>

          <li onClick={() => setMenuOpen(false)}>
            Ask
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="theme-switcher"
          role="group"
          aria-label="Theme"
        >
          <button
            type="button"
            className={
              preference === "system"
                ? "theme-btn active-theme"
                : "theme-btn"
            }
            onClick={() => setPreference("system")}
            title="System"
          >
            <MdOutlineComputer />
          </button>

          <button
            type="button"
            className={
              preference === "dark"
                ? "theme-btn active-theme"
                : "theme-btn"
            }
            onClick={() => setPreference("dark")}
            title="Dark"
          >
            <IoMoonOutline />
          </button>

          <button
            type="button"
            className={
              preference === "light"
                ? "theme-btn active-theme"
                : "theme-btn"
            }
            onClick={() => setPreference("light")}
            title="Light"
          >
            <IoSunnyOutline />
          </button>
        </div>
          </nav>

  </header>

  {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;