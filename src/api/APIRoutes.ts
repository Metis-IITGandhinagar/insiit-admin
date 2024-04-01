enum APIRoutes {
  // AUTH
  LOGIN = "/auth/loginWithEmailAndPassword",
  CREATE_USER = "/auth/createUserWithEmailAndPassword",
  RENEW_ACCESS_TOKEN = "/auth/accessToken",
  VERIFY_ACCESS_TOKEN = "/api",
  LOGOUT = "/auth/logout",

  MESS = "/mess",
  UPDATE_MESS_MENU = "/mess/MESS_ID/menu/MENU_ID",
}

export default APIRoutes;
