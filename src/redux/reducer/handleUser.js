// redux/reducer/handleUser.js
const initialState = {
  user: null,
};

const handleUser = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export default handleUser;
