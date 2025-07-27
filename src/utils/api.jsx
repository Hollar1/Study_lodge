export const baseUrl = "https://study-lodge-api.onrender.com/api";

export const endpoints = {
  signUp: "/auth/signup",
  signUp_otp: "/auth/verify-email-otp",
  createAdmin: "/auth/admin/signup",
  login: "/auth/login",
  forgotPass_email: "/auth/forgot-password",
  resetPass: "/auth/reset-password",

  // USER
  getAllUsers: "/user/all",
  get_A_UserProfile: "/user/",
  deleteUserAccount: "/user/",
  updateUserProfile: "/user/profile",

  // HOSTELS
  getAllHostel: "/hostels",
  singleHostelDetails: "/hostels/",
  create_hostel: "/hostels",
  updateHostel: "/hostels/",
  deleteHostel: "/hostels/",

  // ROOMS
  getRoomForHostel: "/rooms/hostel/",
  get_A_room: "/rooms/room/",
  addRoom: "/rooms",
  get_all_rooms: "/rooms",
  updateRoom: "/rooms/",
  deleteRoom: "/rooms/",
  makeRoomAvailable:"/rooms/{id}/status",

  // BOOKINGS
  createBooking: "/bookings",

  // PAYMENTS
  agentFeePayment: "/payments/agent-fee/initiate",
  roomFeePayment: "/payments/room-price/initiate",
  verifyPayment: "/payments/verify",
  getAllTenants: "/payments/tenants",
};
