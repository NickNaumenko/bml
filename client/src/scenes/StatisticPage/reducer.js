import { fetchUsers } from './actions';

const initialState = {
  isLoading: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchUsers.TRIGGER:
      return {
        ...state,
        isLoading: true,
      };
    case fetchUsers.SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case fetchUsers.FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case fetchUsers.FULFILL:
      return {
        ...state,
        isLoading: false,
      };  
    default:
      return state;
  }
};
