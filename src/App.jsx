import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./screens/home/Home";
import SignUp from "./screens/signUp/SignUp";
import Login from "./screens/login/Login";
import SignUp_otp from "./screens/signUp_otp/SignUp_otp";
import ForgotPassEmail from "./screens/forgotPassEmail/ForgotPassEmail";
import { useEffect, useState } from "react";
import ForgotPass_otp from "./screens/forgotPass_otp/ForgotPass_otp";
import Hostel from "./screens/hostels/Hostel";
import BookInspection from "./screens/bookInspection/BookInspection";
import ReceiptPage from "../src/components/receiptPage/ReceiptPage";
import Profile from "./screens/profile/Profile";
import About from "./screens/about/About";
import JobVacancy from "./screens/jobVacancy/JobVacancy";
import Terms_conditions from "./screens/terms_condition/Terms_conditions";
import PrivacyPolicy from "./screens/privacyPolicy/PrivacyPolicy";
import HelpSupport from "./screens/helpSupport/HelpSupport";
import AdminDashboard from "./ADMIN/adminDashboard/AdminDashboard";
import AllHostels from "../src/ADMIN/allHostels/AllHostels";
import AddRoom from "./ADMIN/addRoom/AddRoom";
import AllRooms from "./ADMIN/allRooms/AllRooms";
import UpdateRoom from "./ADMIN/updateRoom/UpdateRoom";
import CreateHostel from "./ADMIN/createHostel/CreateHostel";
import Review from "./screens/review/Review";
import AdminSignUp from "./ADMIN/adminSignUp/AdminSignUp";
import AllUsers from "./ADMIN/allUsers/AllUsers";
import UpdateHostel from "./ADMIN/updateHostel/UpdateHostel";
import RentReceipt from "./components/rentReceipt/RentReceipt";
import MoreDetails from "./screens/moreDetails/MoreDetails";
import Booking from "./ADMIN/booking/Booking";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* {   isMobile ? ( */}
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up-otp" element={<SignUp_otp />} />
          <Route path="/forgot-pass-email" element={<ForgotPassEmail />} />
          <Route path="/forgot-pass-otp" element={<ForgotPass_otp />} />
          <Route path="/hostel/:hostel_id" element={<Hostel />} />
          <Route path="/receipt-page" element={<ReceiptPage />} />
          <Route path="/rent-receipt" element={<RentReceipt />} />
          <Route path="/profile/:user_id" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-vacancy" element={<JobVacancy />} />
          <Route path="/terms-conditions" element={<Terms_conditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/review" element={<Review />} />
          <Route path="/more-details" element={<MoreDetails />} />

          <Route
            path="/book-inspection/:room_id"
            element={<BookInspection />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/all-hostels" element={<AllHostels />} />
          <Route path="/add-room/:hostelId" element={<AddRoom />} />
          <Route path="/all-rooms" element={<AllRooms />} />
          <Route path="/update-room/:roomId" element={<UpdateRoom />} />
          <Route path="/create-hostel" element={<CreateHostel />} />
          <Route path="/admin-sign-up" element={<AdminSignUp />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/update-hostel/:hostel_ID" element={<UpdateHostel />} />
        </Routes>
      </Router>
      {/* ) : ( */}
      {/* <div className="mobileOnly">
          <h3>Heads up!</h3>
          <p>
            This website is currently designed for mobile devices only. We're
            working on bringing full desktop support soon. Thanks for your
            patience!
          </p>
        </div> */}
      {/* )} */}
    </div>
  );
}

export default App;
