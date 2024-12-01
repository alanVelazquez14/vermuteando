import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import AgeVerification from "./components/AgeVerification/AgeVerification.jsx";
import SearchProvider from "../SearchProvider.jsx";
import Productos from "./components/Productos/Productos.jsx";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const isOfAge = localStorage.getItem("isOfAge") === "true";
    setIsVerified(isOfAge);
  }, []);

  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const contentStyle = {
    flexGrow: 1,
  };

  return (
    <SearchProvider>
      <Router>
        <div style={mainContainerStyle}>
          <Navbar />
          {!isVerified ? (
            <AgeVerification onConfirm={() => setIsVerified(true)} />
          ) : (
            <div style={contentStyle}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
              </Routes>
            </ div>
          )}{" "}
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
