import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();
const showNavbar =()=> {
    navRef.current.classList.toggle("responsive_nav")
}

  return (
    <div>
      <header className="header">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/90/3d/ce/903dce0157caaeb402e20ed422cb144b.gif"
          alt="logo"
        />
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Skills</a>
          <a href="/#">Services</a>
          <a href="/#">Projects</a>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <button  onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
