import { GLobalStyle } from "./Components/Global.style";
import { Routes, Route } from "react-router-dom";
import Location from "./pages/map/Location";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Booking from "./pages/booking/Booking";
import Header from "./Components/header/Header";
import Contact from "./pages/contact/Contact";
import Footer from "./Components/footer/Footer";
import DestinationPage from "./pages/destination/destinationPage";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";

//process.env.variablename of local env

export default function App() {
  return (
    <>
      <Header />
      <GLobalStyle />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
