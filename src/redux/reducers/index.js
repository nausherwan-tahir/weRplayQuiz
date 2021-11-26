import { ActionSheetIOS } from 'react-native';
import {combineReducers} from 'redux';

export const rootReducer = (
  state = {
    isAuthenticated: false,
    userData: {},
    sports: 0,
    science: 0,
    maths: 0,
    computer: 0,
    knowledge: 0,
    arts: 0,
    questions: {},
    loading: false,
    logout: false,
    error: {}
  },
  action,
) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
    case 'QUESTIONS_SUCCESS':
    case 'SCORE_SUCCESS':
      return{...state, isAuthenticated: true, logout: false, loading: false}
    case 'SET_USER_INFO':
      return {...state, userData: action.Info};
    case 'GET_USER_INFO':
      return(userData);
    case 'SET_QUESTIONS':
      return {...state, questions: action.Info};
    case 'SET_SPORTS':
      return {...state, sports: action.Info};
    case 'SET_SCIENCE':
      return {...state, science: action.Info};
    case 'SET_MATHS':
      return {...state, maths: action.Info};
    case 'LOADING':
      return {...state, loading: action.isLoading};
    case 'AUTH_ERROR':
    case 'QUESTIONS_ERROR':
    case 'SCORE_ERROR':
      return {
          ...state,
          isAuthenticated: false,
          loading: false,
          userData: {},
          error: action.info,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        userData: {},
        maths: 0,
        science: 0,
        sports: 0,
        logout: action.isLogedOut
      }  
    default:
      return state;  
    }
  };
  
  export default combineReducers({
    main: rootReducer,
  });