import {
  USER_DATA_REQUEST,
  USER_DATA_SUCESS,
  USER_DATA_FAILURE,
} from "./../constants/usersDataConstant";
export const userListReducer = (
  state = { loading: true, users: [] },
  action: any
) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return { loading: true };
    case USER_DATA_SUCESS:
      return { loading: false, users: action.payload };
    case USER_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
