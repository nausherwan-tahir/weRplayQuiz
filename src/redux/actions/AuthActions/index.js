export const loading = bool => ({
    type: "LOADING",
    isLoading: bool
});
  
export const logout = bool => ({
    type: "LOGOUT",
    isLogedOut: bool
});
  
export const success = success => ({
    type: "AUTH_SUCCESS",
    data: success
});
  
export const error = error => ({
    type: "AUTH_ERROR",
    error
});
  
export const setUserInfo = Info => ({
    type: "SET_USER_INFO",
    Info
});

// Load user
export const loadUser = (data) => async dispatch => {
    try {
      dispatch(setUserInfo(data));
      return success(data);
    } catch (err) {
        error(err || 'ERROR');
    }
}
// Logout user
export const logoutUser = () => async dispatch => {
    try {
      return dispatch(logout(true));
    } catch (err) {
        error(err || 'ERROR');
    }
}