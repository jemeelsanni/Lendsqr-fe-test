import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
} from "./../constants/userConstant";
// interface sign {
//   type: ActonType;
// }
export const signin =
  (email: string, password: string, navigate: any) => (dispatch: any) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
      payload: {
        email,
        password,
      },
    });
    try {
      const data = {
        email,
        password,
      };

      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      navigate("/dashboard/users");
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: error,
      });
    }
  };
export const signout = (navigate: any) => (dispatch: any) => {
  localStorage.removeItem("user");
  localStorage.removeItem("usersdata");
  navigate("/");
  dispatch({ type: USER_SIGNOUT });
};
