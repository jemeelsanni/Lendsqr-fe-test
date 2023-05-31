import axios from "axios";
import {
  USER_DATA_REQUEST,
  USER_DATA_SUCESS,
  USER_DATA_FAILURE,
} from "./../constants/usersDataConstant";
export const userListAction = () => async (dispatch: any) => {
  dispatch({
    type: USER_DATA_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
    );

    dispatch({ type: USER_DATA_SUCESS, payload: data });
    localStorage.setItem("usersdata", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_DATA_FAILURE, payload: error });
  }
};
