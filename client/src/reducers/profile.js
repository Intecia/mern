import { GET_PROFILE, PROFILE_ERROR,GET_PROFILES, CLEAR_PROFILE ,UPDATE_PROFILE} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  errors: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
      case GET_PROFILES:
        return {
          ...state,
          profiles:payload,
          loading:false
        }
    case PROFILE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false
      };

    default:
      return state;
  }
}
