import React from "react";

const AgeVerification = ({ onConfirm }) => {
  const handleConfirm = () => {
    localStorage.setItem("isOfAge", "true");
    onConfirm();
  };

  const handleReject = () => {
    window.location.href = "https://www.instagram.com/vermute_ando/";
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img
          src="img/logoVermuteando2.png"
          alt="Logo Vermuteando"
          style={styles.logo}
        />
        <h2>¿SOS MAYOR DE 18 AÑOS?</h2>
        <p>
          Si sos menor de edad tenés que saber que el consumo de alcohol no es
          bueno para tu salud sobre todo para tu cerebro que se encuentra en
          proceso de desarrollo.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.buttonConfirm} onClick={handleConfirm}>
            Sí
          </button>
          <button style={styles.buttonReject} onClick={handleReject}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundImage: "url(img/fondoVermuteando.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundBlendMode: "overlay",
    borderRadius: "10px",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
    padding: "20px",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
    position: "relative",
  },
  logo: {
    width: "200px",
    height: "150px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  buttonConfirm: {
    fontFamily: "Oswald",
    fontSize: "1em",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid green",
    color: "white",
    borderRadius: "15px",
    cursor: "pointer",
  },
  buttonReject: {
    fontSize: "1em",
    fontFamily: "Oswald",
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid red",
    color: "white",
    borderRadius: "15px",
    cursor: "pointer",
  },
};

export default AgeVerification;
