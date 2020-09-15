import axios from "axios";
import { POST_ERROR, GET_POSTS, SEARCH_USER, SEARCH_ERROR } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=756abb2f&s=Pokemon&plot=full`);
    dispatch({
      type: GET_POSTS,
      payload: res.data.Search,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: "Fetching Users Failed" },
    });
  }
};

export const searchUser = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/${query}`);
    dispatch({
      type: SEARCH_USER,
      payload: res.data.Search,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: `${err}` },
    });
  }
};
