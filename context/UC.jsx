import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  sideBar: false,
  allPost: [],
};


const Reducer = (state, action) => {
  switch (action.type) {
    case "SIDE_BAR":
      return {
        ...state,
        sideBar: !state.sideBar,
      };
    case "GET_POST":
      return {
        ...state,
        allPost: (state.allPost = action.payload),
      };
    case "LOG_CHECK":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export const UC = React.createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // AUTO LOGIN
  useEffect(() => {
    async function get() {
      try {
        const res = await axios.post(
          `${process.env.SERVER}autologin`,
          {},
          { withCredentials: true }
        );

        // GETING BOOLEAN FROM SERVER FOR ROUTEING
        if (res.data === true) {
          dispatch({
            type: "LOG_CHECK",
            payload: true,
          });
        }
      } catch (error) {
        console.log(error.response.message);
      }
    }
    get();
  }, []);
  return (
    <>
      <UC.Provider
        value={{
          dispatch,
          sideBar: state.sideBar,
          isLoggedIn: state.isLoggedIn,
          allPost: state.allPost,
        }}
      >
        {children}
        
      </UC.Provider>
    </>
  );
};

export default Provider;
