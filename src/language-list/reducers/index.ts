import { GET_LANGUAGES_SUCCESS, GetLanguagesTypes, SET_NEW_LANGUAGE_SUCCESS } from '../models/actions';
import { Language } from '../models/types';

export interface IInitialState {
  loading: boolean;
  data: Language[];
}

const initialState: IInitialState = {
  data: [],
  loading: true,
};

export default function (state: IInitialState = initialState, action: GetLanguagesTypes): IInitialState {
  switch (action.type) {
    case GET_LANGUAGES_SUCCESS:
    case SET_NEW_LANGUAGE_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
}
