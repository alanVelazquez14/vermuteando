import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import AgeVerification from "./components/AgeVerification/AgeVerification.jsx";
import Contacto from "./components/Contactanos/Contacto.jsx";

function App() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const isOfAge = localStorage.getItem("isOfAge") === "true";
    setIsVerified(isOfAge);
  }, []);

  return (
    <>
      <Navbar />
      {!isVerified ? (
        <AgeVerification onConfirm={() => setIsVerified(true)} />
      ) : (
        <>
          <Home />
          {/* <Contacto /> */}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
