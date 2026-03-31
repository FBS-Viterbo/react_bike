import { BetweenHorizontalEnd, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">BikeZone</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Bikes</a>
            </li>
            <li>
              <a href="#home">Contact</a>
            </li>
          </ul>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <>
            <div className="md:hidden bg-white px-4 pb-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#bikes">Bikes</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
