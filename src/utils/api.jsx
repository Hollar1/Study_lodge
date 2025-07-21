export const baseUrl = "https://study-lodge-api.onrender.com/api";

export const endpoints = {
  signUp: "/auth/signup",
  signUp_otp: "/auth/verify-email-otp",
  adminSignUp: "/auth/admin/signup",
  login: "/auth/login",
  forgotPass_email: "/auth/forgot-password",
  resetPass: "/auth/reset-password",

  // USER
  getAllUser: "/user/all",
  get_A_UserProfile: "/user/",
  deleteUserAccount: "/user/",
  updateUserProfile: "/user/profile",


  // HOSTELS
  getAllHostel: "/hostels",
  singleHostelDetails: "/hostels/",

  // ROOMS
  getRoomForHostel: "/rooms/hostel/",
  get_A_room: "/rooms/room/",
  update_A_room:"/rooms/",
  addRoom:"/rooms",

  // BOOKINGS
  createBooking: "/bookings",

  // PAYMENTS
  agentFeePayment: "/payments/agent-fee/initiate",
  roomFeePayment: "/payments/room-price/initiate",
  verifyPayment: "/payments/verify",
};
