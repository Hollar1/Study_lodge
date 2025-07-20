export const baseUrl = "https://study-lodge-api.onrender.com/api";

export const endpoints = {
  signUp: "/auth/signup",
  signUp_otp: "/auth/verify-email-otp",
  adminSignUp: "/auth/admin/signup",
  login: "/auth/login",
  forgotPass_email: "/auth/forgot-password",
  resetPass: "/auth/reset-password",

  // HOSTELS
  getAllHostel: "/hostels",
  singleHostelDetails: "/hostels/",

  // ROOMS
  getRoomForHostel: "/rooms/hostel/",
  get_A_room: "/rooms/room/",

  // BOOKINGS
  createBooking: "/bookings",

  // PAYEMENTS
  agentFeePayment: "/payments/agent-fee/initiate",
  verifyPayment:"/payments/verify"
};
