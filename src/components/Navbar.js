import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>My Institute</h2>

      {isMobile ? (
        <>
          <div onClick={toggleMenu} style={styles.menuIcon}>☰</div>
          {menuOpen && (
            <div style={styles.mobileLinks}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={styles.link}
                  onMouseOver={(e) => e.target.style.color = "red"}
                  onMouseOut={(e) => e.target.style.color = "black"}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <div style={styles.rightSection}>
          <div style={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={styles.link}
                onMouseOver={(e) => e.target.style.color = "red"}
                onMouseOut={(e) => e.target.style.color = "black"}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Now Button */}
          <div style={styles.callNow}>
            <a href="tel:9422123456" title="Call Now" style={styles.callLink}>
            <p style={styles.callText}><span style={{ color: 'red' }}>📞</span> 9422123456</p>

            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
//   { to: "/compressor", label: "Compressor" }
];

const styles = {
  nav: {
    backgroundColor: "#fff",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#000",
    position: "relative",
    flexWrap: "wrap",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    color: "#000"
  },
  menuIcon: {
    fontSize: "28px",
    cursor: "pointer",
    color: "#000"
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  mobileLinks: {
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 999
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s"
  },
  callNow: {
    position: "relative",
    marginLeft: "20px"
  },
  callLink: {
    textDecoration: "none",
    color: "#000",
    position: "relative",
    display: "flex",
    alignItems: "center"
  },
  callText: {
    fontWeight: "bold",
    marginRight: "10px"
  },
  circle: {
    position: "absolute",
    borderRadius: "50%",
    pointerEvents: "none"
  },
  circle1: {
    width: "40px",
    height: "40px",
    border: "2px solid red",
    animation: "pulse 1.2s infinite ease-in-out",
    left: "85px",
    top: "10px"
  },
  circle2: {
    width: "60px",
    height: "60px",
    border: "2px solid red",
    animation: "pulse 1.8s infinite ease-in-out",
    left: "75px",
    top: "0px"
  },
  phoneCircle: {
    width: "20px",
    height: "20px",
    backgroundColor: "red",
    left: "95px",
    top: "20px"
  }
};

// Global animation using keyframes in index.css
// Add this once in index.css:
/*
@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
*/

export default Navbar;
