import request from "superagent";
import Cookies from "js-cookie";

export const SET_TOKEN = "SET_TOKEN";
export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const INCR_LOADING = "INCR_LOADING";
export const SET_LOADING = 'SET_LOADING';

const setLoading = (payload) => {
    return {type: SET_LOADING, payload: payload};
}

const makeActionCreator = function(actionType) {
  return function(payload) {
    return { type: actionType, payload: payload };
  };
};

const setToken = makeActionCreator(SET_TOKEN);
const setUser = makeActionCreator(SET_USER);
const incrLoading = makeActionCreator(INCR_LOADING);
const setError = makeActionCreator(SET_ERROR);

const baseURL = "https://user-auth-test.herokuapp.com";
const api = path => baseURL + path;

export const register = ({ email, password, full_name, images }, callback) => {
  return (dispatch, getState) => {
    dispatch(incrLoading(1));
    request
      .post(api("/register"))
      .send({
        email: email,
        password: password,
        full_name: full_name,
        images: images
      })
      .end((err, res) => {
        dispatch(incrLoading(-1));
        if (err) {
          return dispatch(setError(res.body.errors));
        } else {
          dispatch(setError(null));
        }

        if (callback) {
          callback();
        }
      });
  };
};

export const loadTokenFromCookie = () => {
  return dispatch => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(setToken(token));
      dispatch(getDashboard());
    }
  };
};

export const login = (email, password, callback) => {
  return (dispatch, getState) => {
    dispatch(incrLoading(1));
    request
      .post(api("/login"))
      .send({ email: email, password: password })
      .end((err, res) => {
        dispatch(incrLoading(-1));
        if (err) {
          return dispatch(setError(res.body.errors));
        } else {
          dispatch(setError(null));
        }

        dispatch(setToken(res.body["auth_token"]));
        dispatch(getDashboard());
        Cookies.set("token", res.body["auth_token"], { expires: 7 });

        if (callback) {
          callback();
        }
      });
  };
};

export const updatedWardrobe = (userid) => {
    return (dispatch, getState) => {
      console.log('spicy meatball');
        dispatch(setLoading(1));
        request.get(`https://shrouded-tor-56673.herokuapp.com/api/user/${userid}}`).end((error, response) => {
            if (error) {
                // TODO handle error in some way
            }
          })
      }
  }

const getDashboard = token => {
  return (dispatch, getState) => {
    token = token || getState().token;

    if (!token) {
      return;
    }
    dispatch(incrLoading(1));
    request
      .get(api("/dashboard"))
      .set("X-AUTH-TOKEN", token)
      .end((err, res) => {
        if (err) {
          return;
        }
        dispatch(
          setUser({
            email: res.body.email,
            full_name: res.body.full_name,
            message: res.body.message
          })
        );
        dispatch(incrLoading(-1));
      });
  };
};
