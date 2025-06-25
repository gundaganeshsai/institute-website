import React, { useState } from "react";

const images = [
  process.env.PUBLIC_URL + "/images/trainimageone.jpg",
  process.env.PUBLIC_URL + "/images/trainimagethree.jpg"
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sliderWrapper}>
        <div style={styles.slider}>
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            style={styles.image}
          />
          <button
            onClick={prevSlide}
            style={{ ...styles.arrow, ...styles.leftArrow }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(0,0,0,0.5)")}
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            style={{ ...styles.arrow, ...styles.rightArrow }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(0,0,0,0.5)")}
          >
            ❯
          </button>
        </div>
      </div>

      <h1>Welcome to My Institute</h1>
      <p>Empowering students with quality education and practical knowledge.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  sliderWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  },
  slider: {
    position: "relative",
    width: "800px",
    height: "300px"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "30px",
    backgroundColor: "rgba(0,0,0,0.5)", // transparent black
    color: "#fff",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    zIndex: 1,
    borderRadius: "50%",
    transition: "background-color 0.3s"
  },
  leftArrow: {
    left: "10px"
  },
  rightArrow: {
    right: "10px"
  }
};

export default Home;
