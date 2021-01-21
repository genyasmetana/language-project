import { Dispatch } from 'redux';
import {
  GET_LANGUAGES_SUCCESS,
  GetLanguagesTypes,
  SET_NEW_LANGUAGE_SUCCESS,
  IGetLanguagesSuccess,
  ISetNewLanguage,
} from '../models/actions';
import mockData from '../../__mock__/data.json';

interface ICountry {
  value: string;
  label: string;
}

export const getLanguagesDataAction = () => (dispatch: Dispatch<GetLanguagesTypes>): IGetLanguagesSuccess => {
  const storedLanguages = window.localStorage.getItem('languages')
    ? JSON.parse(window.localStorage.getItem('languages') || '')
    : [];

  return dispatch({
    type: GET_LANGUAGES_SUCCESS,
    payload: {
      data: [...mockData.data, ...storedLanguages],
    },
  });
};

export const setNewLanguageAction = (country: ICountry) => (
  dispatch: Dispatch<GetLanguagesTypes>,
  getState: any,
): ISetNewLanguage => {
  const storedLanguages = window.localStorage.getItem('languages')
    ? JSON.parse(window.localStorage.getItem('languages') || '')
    : [];

  const idByDate = new Date();
  const state = getState();
  const defaultData = {
    id: idByDate.getTime(),
    language: country.label,
    flag: `https://raw.githubusercontent.com/hjnilsson/country-flags/master/svg/${country.value}.svg`,
    done: 0,
    toDo: 99999,
    unresolved: 99999,
  };

  if (!window.localStorage.getItem('languages')) {
    window.localStorage.setItem('languages', JSON.stringify([defaultData]));
  } else {
    window.localStorage.setItem('languages', JSON.stringify([...storedLanguages, defaultData]));
  }

  return dispatch({
    type: SET_NEW_LANGUAGE_SUCCESS,
    payload: {
      data: [...state.languageList.data, defaultData],
    },
  });
};
