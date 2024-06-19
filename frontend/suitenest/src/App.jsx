import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import Home from "../src/components/home/Home";
import AddRoom from "./components/room/AddRoom";
import ExistingRooms from "./components/room/ExistingRooms";
import EditRoom from "./components/room/EditRoom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import RoomListing from "./components/room/RoomListing";
import Admin from "./components/admin/Admin";
import Checkout from "./components/booking/Checkout";
import BookingSuccess from "./components/booking/BookingSuccess";
import Bookings from "./components/booking/Bookings";

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-room" element={<AddRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
          <Route path="/browse-all-rooms" element={<RoomListing />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/book-room/:roomId" element={<Checkout />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/existing-bookings" element={<Bookings />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
